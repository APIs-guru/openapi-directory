from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Oidc:
    allowed_audiences: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allowedAudiences' }})
    issuer_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'issuerUri' }})
    
