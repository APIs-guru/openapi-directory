from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class ConvertcurrencyQueryParams:
    amount: str = field(metadata={'query_param': { 'field_name': 'amount', 'style': 'form', 'explode': True }})
    from_: str = field(metadata={'query_param': { 'field_name': 'from', 'style': 'form', 'explode': True }})
    license: str = field(metadata={'query_param': { 'field_name': 'license', 'style': 'form', 'explode': True }})
    to: str = field(metadata={'query_param': { 'field_name': 'to', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class Convertcurrency200ApplicationJSON:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Code') }})
    converted: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Converted') }})
    credits: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Credits') }})
    currency: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Currency') }})
    

@dataclass
class ConvertcurrencyRequest:
    query_params: ConvertcurrencyQueryParams = field()
    

@dataclass
class ConvertcurrencyResponse:
    content_type: str = field()
    status_code: int = field()
    convertcurrency_200_application_json_object: Optional[Convertcurrency200ApplicationJSON] = field(default=None)
    
