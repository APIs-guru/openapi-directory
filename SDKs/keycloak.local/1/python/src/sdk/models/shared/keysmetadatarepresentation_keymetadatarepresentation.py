from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class KeysMetadataRepresentationKeyMetadataRepresentation:
    algorithm: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'algorithm' }})
    certificate: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'certificate' }})
    kid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kid' }})
    provider_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'providerId' }})
    provider_priority: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'providerPriority' }})
    public_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'publicKey' }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
