from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class GetcurrencyrateQueryParams:
    license: str = field(metadata={'query_param': { 'field_name': 'license', 'style': 'form', 'explode': True }})
    symbol: str = field(metadata={'query_param': { 'field_name': 'symbol', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class Getcurrencyrate200ApplicationJSON:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Code') }})
    country: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Country') }})
    credits: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Credits') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    rate: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Rate') }})
    symbol: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Symbol') }})
    

@dataclass
class GetcurrencyrateRequest:
    query_params: GetcurrencyrateQueryParams = field()
    

@dataclass
class GetcurrencyrateResponse:
    content_type: str = field()
    status_code: int = field()
    getcurrencyrate_200_application_json_object: Optional[Getcurrencyrate200ApplicationJSON] = field(default=None)
    
