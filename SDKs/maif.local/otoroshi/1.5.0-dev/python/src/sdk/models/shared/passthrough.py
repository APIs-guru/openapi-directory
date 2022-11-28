from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PassThrough:
    r"""PassThrough
    Strategy where only signature and field values are verified
    """
    
    type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    verification_settings: VerificationSettings = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('verificationSettings') }})
    
