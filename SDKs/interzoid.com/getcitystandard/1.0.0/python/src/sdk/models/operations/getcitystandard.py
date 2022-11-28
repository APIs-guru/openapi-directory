from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class GetcitystandardQueryParams:
    city: str = field(metadata={'query_param': { 'field_name': 'city', 'style': 'form', 'explode': True }})
    license: str = field(metadata={'query_param': { 'field_name': 'license', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class Getcitystandard200ApplicationJSON:
    city_standard: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CityStandard') }})
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Code') }})
    credits: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Credits') }})
    

@dataclass
class GetcitystandardRequest:
    query_params: GetcitystandardQueryParams = field()
    

@dataclass
class GetcitystandardResponse:
    content_type: str = field()
    status_code: int = field()
    getcitystandard_200_application_json_object: Optional[Getcitystandard200ApplicationJSON] = field(default=None)
    
