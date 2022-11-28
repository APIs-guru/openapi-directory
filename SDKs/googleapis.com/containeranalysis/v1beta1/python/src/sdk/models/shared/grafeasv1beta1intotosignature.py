from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GrafeasV1beta1IntotoSignature:
    r"""GrafeasV1beta1IntotoSignature
    A signature object consists of the KeyID used and the signature itself.
    """
    
    keyid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('keyid') }})
    sig: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sig') }})
    
