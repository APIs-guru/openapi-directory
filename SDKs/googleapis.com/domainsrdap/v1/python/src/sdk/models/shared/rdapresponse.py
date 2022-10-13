from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import httpbody
from . import notice


@dataclass_json
@dataclass
class RdapResponse:
    description: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    error_code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errorCode' }})
    json_response: Optional[httpbody.HTTPBody] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jsonResponse' }})
    lang: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lang' }})
    notices: Optional[List[notice.Notice]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'notices' }})
    rdap_conformance: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rdapConformance' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    
