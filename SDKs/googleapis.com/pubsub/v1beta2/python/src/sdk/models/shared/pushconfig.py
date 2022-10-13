from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import oidctoken


@dataclass_json
@dataclass
class PushConfig:
    attributes: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attributes' }})
    oidc_token: Optional[oidctoken.OidcToken] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'oidcToken' }})
    push_endpoint: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pushEndpoint' }})
    
