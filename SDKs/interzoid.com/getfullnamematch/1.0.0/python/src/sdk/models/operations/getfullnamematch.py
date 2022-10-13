from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass
class GetfullnamematchQueryParams:
    fullname: str = field(default=None, metadata={'query_param': { 'field_name': 'fullname', 'style': 'form', 'explode': True }})
    license: str = field(default=None, metadata={'query_param': { 'field_name': 'license', 'style': 'form', 'explode': True }})
    

@dataclass
class GetfullnamematchRequest:
    query_params: GetfullnamematchQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class Getfullnamematch200ApplicationJSON:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Code' }})
    credits: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Credits' }})
    simkey: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Simkey' }})
    

@dataclass
class GetfullnamematchResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    getfullnamematch_200_application_json_object: Optional[Getfullnamematch200ApplicationJSON] = field(default=None)
    
