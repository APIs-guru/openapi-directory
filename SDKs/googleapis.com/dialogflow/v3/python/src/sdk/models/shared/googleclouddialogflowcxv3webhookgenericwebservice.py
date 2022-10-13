from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3WebhookGenericWebService:
    allowed_ca_certs: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allowedCaCerts' }})
    password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'password' }})
    request_headers: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestHeaders' }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    username: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'username' }})
    
