from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass
class GetcountrystandardQueryParams:
    country: str = field(default=None, metadata={'query_param': { 'field_name': 'country', 'style': 'form', 'explode': True }})
    license: str = field(default=None, metadata={'query_param': { 'field_name': 'license', 'style': 'form', 'explode': True }})
    

@dataclass
class GetcountrystandardRequest:
    query_params: GetcountrystandardQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class Getcountrystandard200ApplicationJSON:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Code' }})
    country_standard: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CountryStandard' }})
    credits: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Credits' }})
    

@dataclass
class GetcountrystandardResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    getcountrystandard_200_application_json_object: Optional[Getcountrystandard200ApplicationJSON] = field(default=None)
    
