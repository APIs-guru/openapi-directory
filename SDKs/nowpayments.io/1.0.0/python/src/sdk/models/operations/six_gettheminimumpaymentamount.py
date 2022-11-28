from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class SixGetTheMinimumPaymentAmountQueryParams:
    currency_from: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'currency_from', 'style': 'form', 'explode': True }})
    currency_to: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'currency_to', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class SixGetTheMinimumPaymentAmount200ApplicationJSON:
    currency_from: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currency_from') }})
    currency_to: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currency_to') }})
    min_amount: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('min_amount') }})
    

@dataclass
class SixGetTheMinimumPaymentAmountRequest:
    query_params: SixGetTheMinimumPaymentAmountQueryParams = field()
    

@dataclass
class SixGetTheMinimumPaymentAmountResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    six_get_the_minimum_payment_amount_200_application_json_object: Optional[SixGetTheMinimumPaymentAmount200ApplicationJSON] = field(default=None)
    
