from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass
class GlobalpageloadQueryParams:
    license: str = field(default=None, metadata={'query_param': { 'field_name': 'license', 'style': 'form', 'explode': True }})
    origin: str = field(default=None, metadata={'query_param': { 'field_name': 'origin', 'style': 'form', 'explode': True }})
    url: str = field(default=None, metadata={'query_param': { 'field_name': 'url', 'style': 'form', 'explode': True }})
    

@dataclass
class GlobalpageloadRequest:
    query_params: GlobalpageloadQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class Globalpageload200ApplicationJSON:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Code' }})
    contents: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Contents' }})
    credits: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Credits' }})
    origin: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Origin' }})
    page_response_status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PageResponseStatus' }})
    seconds: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Seconds' }})
    

@dataclass
class GlobalpageloadResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    globalpageload_200_application_json_object: Optional[Globalpageload200ApplicationJSON] = field(default=None)
    
