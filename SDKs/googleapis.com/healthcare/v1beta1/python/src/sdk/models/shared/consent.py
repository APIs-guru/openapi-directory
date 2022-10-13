from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudhealthcarev1beta1consentpolicy

class ConsentStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    ACTIVE = "ACTIVE"
    ARCHIVED = "ARCHIVED"
    REVOKED = "REVOKED"
    DRAFT = "DRAFT"
    REJECTED = "REJECTED"


@dataclass_json
@dataclass
class Consent:
    consent_artifact: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'consentArtifact' }})
    expire_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expireTime' }})
    metadata: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metadata' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    policies: Optional[List[googlecloudhealthcarev1beta1consentpolicy.GoogleCloudHealthcareV1beta1ConsentPolicy]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'policies' }})
    revision_create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'revisionCreateTime' }})
    revision_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'revisionId' }})
    state: Optional[ConsentStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    ttl: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ttl' }})
    user_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userId' }})
    
