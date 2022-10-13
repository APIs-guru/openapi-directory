from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import image
from . import signature
from . import signature
from . import signature


@dataclass_json
@dataclass
class ConsentArtifact:
    consent_content_screenshots: Optional[List[image.Image]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'consentContentScreenshots' }})
    consent_content_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'consentContentVersion' }})
    guardian_signature: Optional[signature.Signature] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'guardianSignature' }})
    metadata: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metadata' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    user_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userId' }})
    user_signature: Optional[signature.Signature] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userSignature' }})
    witness_signature: Optional[signature.Signature] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'witnessSignature' }})
    
