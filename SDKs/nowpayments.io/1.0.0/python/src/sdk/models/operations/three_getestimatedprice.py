from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class ThreeGetEstimatedPriceQueryParams:
    amount: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'amount', 'style': 'form', 'explode': True }})
    currency_from: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'currency_from', 'style': 'form', 'explode': True }})
    currency_to: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'currency_to', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class ThreeGetEstimatedPrice200ApplicationJSON:
    amount_from: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('amount_from') }})
    currency_from: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currency_from') }})
    currency_to: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currency_to') }})
    estimated_amount: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('estimated_amount') }})
    

@dataclass
class ThreeGetEstimatedPriceRequest:
    query_params: ThreeGetEstimatedPriceQueryParams = field()
    

@dataclass
class ThreeGetEstimatedPriceResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    three_get_estimated_price_200_application_json_object: Optional[ThreeGetEstimatedPrice200ApplicationJSON] = field(default=None)
    
