from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import jwt
from . import signature


@dataclass_json
@dataclass
class AttestationOccurrence:
    jwts: Optional[List[jwt.Jwt]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jwts' }})
    serialized_payload: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serializedPayload' }})
    signatures: Optional[List[signature.Signature]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'signatures' }})
    
