from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GradientRule:
    r"""GradientRule
    A rule that applies a gradient color scale format, based on the interpolation points listed. The format of a cell will vary based on its contents as compared to the values of the interpolation points.
    """
    
    maxpoint: Optional[InterpolationPoint] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxpoint') }})
    midpoint: Optional[InterpolationPoint] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('midpoint') }})
    minpoint: Optional[InterpolationPoint] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minpoint') }})
    
