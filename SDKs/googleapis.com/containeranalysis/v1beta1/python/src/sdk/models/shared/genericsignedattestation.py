from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import signature

class GenericSignedAttestationContentTypeEnum(str, Enum):
    CONTENT_TYPE_UNSPECIFIED = "CONTENT_TYPE_UNSPECIFIED"
    SIMPLE_SIGNING_JSON = "SIMPLE_SIGNING_JSON"


@dataclass_json
@dataclass
class GenericSignedAttestation:
    content_type: Optional[GenericSignedAttestationContentTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contentType' }})
    serialized_payload: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serializedPayload' }})
    signatures: Optional[List[signature.Signature]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'signatures' }})
    
