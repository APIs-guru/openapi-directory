from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class FetchVerificationOptionsRequest:
    r"""FetchVerificationOptionsRequest
    Request message for Verifications.FetchVerificationOptions.
    """
    
    context: Optional[ServiceBusinessContext] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('context') }})
    language_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('languageCode') }})
    
