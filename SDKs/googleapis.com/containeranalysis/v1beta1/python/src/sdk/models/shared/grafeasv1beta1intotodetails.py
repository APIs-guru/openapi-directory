from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GrafeasV1beta1IntotoDetails:
    r"""GrafeasV1beta1IntotoDetails
    This corresponds to a signed in-toto link - it is made up of one or more signatures and the in-toto link itself. This is used for occurrences of a Grafeas in-toto note.
    """
    
    signatures: Optional[List[GrafeasV1beta1IntotoSignature]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('signatures') }})
    signed: Optional[Link] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('signed') }})
    
