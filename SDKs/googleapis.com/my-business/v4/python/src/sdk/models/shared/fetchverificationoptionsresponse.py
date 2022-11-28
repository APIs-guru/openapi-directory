from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class FetchVerificationOptionsResponse:
    r"""FetchVerificationOptionsResponse
    Response message for Verifications.FetchVerificationOptions.
    """
    
    options: Optional[List[VerificationOption]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    
