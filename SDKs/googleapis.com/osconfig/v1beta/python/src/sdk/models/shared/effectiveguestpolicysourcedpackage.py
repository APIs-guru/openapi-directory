from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class EffectiveGuestPolicySourcedPackage:
    r"""EffectiveGuestPolicySourcedPackage
    A guest policy package including its source.
    """
    
    package: Optional[Package] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('package') }})
    source: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    
