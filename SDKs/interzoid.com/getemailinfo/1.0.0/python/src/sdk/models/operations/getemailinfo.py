from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass
class GetemailinfoQueryParams:
    email: str = field(default=None, metadata={'query_param': { 'field_name': 'email', 'style': 'form', 'explode': True }})
    license: str = field(default=None, metadata={'query_param': { 'field_name': 'license', 'style': 'form', 'explode': True }})
    

@dataclass
class GetemailinfoRequest:
    query_params: GetemailinfoQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class Getemailinfo200ApplicationJSON:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Code' }})
    credits: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Credits' }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Email' }})
    geolocation: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Geolocation' }})
    info: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Info' }})
    is_disposable: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IsDisposable' }})
    is_educational: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IsEducational' }})
    is_generic: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IsGeneric' }})
    is_government: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IsGovernment' }})
    is_organizational: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IsOrganizational' }})
    is_vulgar: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IsVulgar' }})
    response: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Response' }})
    

@dataclass
class GetemailinfoResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    getemailinfo_200_application_json_object: Optional[Getemailinfo200ApplicationJSON] = field(default=None)
    
