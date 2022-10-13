from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ActivateConsentRequest:
    consent_artifact: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'consentArtifact' }})
    expire_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expireTime' }})
    ttl: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ttl' }})
    
