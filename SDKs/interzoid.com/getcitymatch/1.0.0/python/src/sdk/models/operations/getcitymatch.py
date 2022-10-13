from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass
class GetcitymatchQueryParams:
    city: str = field(default=None, metadata={'query_param': { 'field_name': 'city', 'style': 'form', 'explode': True }})
    license: str = field(default=None, metadata={'query_param': { 'field_name': 'license', 'style': 'form', 'explode': True }})
    

@dataclass
class GetcitymatchRequest:
    query_params: GetcitymatchQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class Getcitymatch200ApplicationJSON:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Code' }})
    credits: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Credits' }})
    simkey: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Simkey' }})
    

@dataclass
class GetcitymatchResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    getcitymatch_200_application_json_object: Optional[Getcitymatch200ApplicationJSON] = field(default=None)
    
