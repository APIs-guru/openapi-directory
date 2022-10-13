from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass
class GetaddressmatchQueryParams:
    address: str = field(default=None, metadata={'query_param': { 'field_name': 'address', 'style': 'form', 'explode': True }})
    license: str = field(default=None, metadata={'query_param': { 'field_name': 'license', 'style': 'form', 'explode': True }})
    

@dataclass
class GetaddressmatchRequest:
    query_params: GetaddressmatchQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class Getaddressmatch200ApplicationJSON:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Code' }})
    credits: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Credits' }})
    simkey: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Simkey' }})
    

@dataclass
class GetaddressmatchResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    getaddressmatch_200_application_json_object: Optional[Getaddressmatch200ApplicationJSON] = field(default=None)
    
