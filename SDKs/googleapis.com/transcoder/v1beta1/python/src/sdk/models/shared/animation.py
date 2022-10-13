from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import animationend
from . import animationfade
from . import animationstatic


@dataclass_json
@dataclass
class Animation:
    animation_end: Optional[animationend.AnimationEnd] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'animationEnd' }})
    animation_fade: Optional[animationfade.AnimationFade] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'animationFade' }})
    animation_static: Optional[animationstatic.AnimationStatic] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'animationStatic' }})
    
