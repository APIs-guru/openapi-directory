from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Animation:
    r"""Animation
    Animation types.
    """
    
    animation_end: Optional[AnimationEnd] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('animationEnd') }})
    animation_fade: Optional[AnimationFade] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('animationFade') }})
    animation_static: Optional[AnimationStatic] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('animationStatic') }})
    
