from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class LivingArea:
    r"""LivingArea
    An individual room, such as kitchen, bathroom, bedroom, within a bookable guest unit.
    """
    
    accessibility: Optional[LivingAreaAccessibility] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accessibility') }})
    eating: Optional[LivingAreaEating] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eating') }})
    features: Optional[LivingAreaFeatures] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('features') }})
    layout: Optional[LivingAreaLayout] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('layout') }})
    sleeping: Optional[LivingAreaSleeping] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sleeping') }})
    
