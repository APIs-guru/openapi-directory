from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ConsentArtifact:
    r"""ConsentArtifact
    Documentation of a user's consent.
    """
    
    consent_content_screenshots: Optional[List[Image]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('consentContentScreenshots') }})
    consent_content_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('consentContentVersion') }})
    guardian_signature: Optional[Signature] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('guardianSignature') }})
    metadata: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    user_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userId') }})
    user_signature: Optional[Signature] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userSignature') }})
    witness_signature: Optional[Signature] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('witnessSignature') }})
    
