from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass
class GetcountrymatchQueryParams:
    country: str = field(default=None, metadata={'query_param': { 'field_name': 'country', 'style': 'form', 'explode': True }})
    license: str = field(default=None, metadata={'query_param': { 'field_name': 'license', 'style': 'form', 'explode': True }})
    

@dataclass
class GetcountrymatchRequest:
    query_params: GetcountrymatchQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class Getcountrymatch200ApplicationJSON:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Code' }})
    credits: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Credits' }})
    simkey: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Simkey' }})
    

@dataclass
class GetcountrymatchResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    getcountrymatch_200_application_json_object: Optional[Getcountrymatch200ApplicationJSON] = field(default=None)
    
