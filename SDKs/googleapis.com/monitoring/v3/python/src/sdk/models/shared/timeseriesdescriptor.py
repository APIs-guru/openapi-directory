from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TimeSeriesDescriptor:
    r"""TimeSeriesDescriptor
    A descriptor for the labels and points in a time series.
    """
    
    label_descriptors: Optional[List[LabelDescriptor]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labelDescriptors') }})
    point_descriptors: Optional[List[ValueDescriptor]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pointDescriptors') }})
    
