from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class GenericSignedAttestationContentTypeEnum(str, Enum):
    CONTENT_TYPE_UNSPECIFIED = "CONTENT_TYPE_UNSPECIFIED"
    SIMPLE_SIGNING_JSON = "SIMPLE_SIGNING_JSON"


@dataclass_json
@dataclass
class GenericSignedAttestation:
    r"""GenericSignedAttestation
    An attestation wrapper that uses the Grafeas `Signature` message. This attestation must define the `serialized_payload` that the `signatures` verify and any metadata necessary to interpret that plaintext. The signatures should always be over the `serialized_payload` bytestring.
    """
    
    content_type: Optional[GenericSignedAttestationContentTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contentType') }})
    serialized_payload: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serializedPayload') }})
    signatures: Optional[List[Signature]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('signatures') }})
    
