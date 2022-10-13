from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass
class GetcompanymatchQueryParams:
    company: str = field(default=None, metadata={'query_param': { 'field_name': 'company', 'style': 'form', 'explode': True }})
    license: str = field(default=None, metadata={'query_param': { 'field_name': 'license', 'style': 'form', 'explode': True }})
    

@dataclass
class GetcompanymatchRequest:
    query_params: GetcompanymatchQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class Getcompanymatch200ApplicationJSON:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Code' }})
    credits: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Credits' }})
    simkey: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Simkey' }})
    

@dataclass
class GetcompanymatchResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    getcompanymatch_200_application_json_object: Optional[Getcompanymatch200ApplicationJSON] = field(default=None)
    
