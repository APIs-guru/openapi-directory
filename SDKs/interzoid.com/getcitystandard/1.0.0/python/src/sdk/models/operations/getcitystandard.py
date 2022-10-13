from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass
class GetcitystandardQueryParams:
    city: str = field(default=None, metadata={'query_param': { 'field_name': 'city', 'style': 'form', 'explode': True }})
    license: str = field(default=None, metadata={'query_param': { 'field_name': 'license', 'style': 'form', 'explode': True }})
    

@dataclass
class GetcitystandardRequest:
    query_params: GetcitystandardQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class Getcitystandard200ApplicationJSON:
    city_standard: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CityStandard' }})
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Code' }})
    credits: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Credits' }})
    

@dataclass
class GetcitystandardResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    getcitystandard_200_application_json_object: Optional[Getcitystandard200ApplicationJSON] = field(default=None)
    
