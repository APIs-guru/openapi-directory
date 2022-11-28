from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Signature:
    r"""Signature
    User signature.
    """
    
    image: Optional[Image] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('image') }})
    metadata: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    signature_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('signatureTime') }})
    user_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userId') }})
    
