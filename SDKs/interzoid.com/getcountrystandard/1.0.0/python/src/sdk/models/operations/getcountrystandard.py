from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class GetcountrystandardQueryParams:
    country: str = field(metadata={'query_param': { 'field_name': 'country', 'style': 'form', 'explode': True }})
    license: str = field(metadata={'query_param': { 'field_name': 'license', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class Getcountrystandard200ApplicationJSON:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Code') }})
    country_standard: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CountryStandard') }})
    credits: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Credits') }})
    

@dataclass
class GetcountrystandardRequest:
    query_params: GetcountrystandardQueryParams = field()
    

@dataclass
class GetcountrystandardResponse:
    content_type: str = field()
    status_code: int = field()
    getcountrystandard_200_application_json_object: Optional[Getcountrystandard200ApplicationJSON] = field(default=None)
    
