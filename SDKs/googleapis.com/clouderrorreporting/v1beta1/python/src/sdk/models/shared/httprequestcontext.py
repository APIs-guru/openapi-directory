from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class HTTPRequestContext:
    method: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'method' }})
    referrer: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'referrer' }})
    remote_ip: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'remoteIp' }})
    response_status_code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'responseStatusCode' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    user_agent: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userAgent' }})
    
