from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Transform:
    r"""Transform
    Strategy where signature and field values are verified, trasnformed and then token si re-signed
    """
    
    algo_settings: Any = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('algoSettings') }})
    type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    verification_settings: VerificationSettings = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('verificationSettings') }})
    transform_settings: Optional[TransformSettings] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transformSettings') }})
    
