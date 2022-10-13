from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import labeldescriptor
from . import valuedescriptor


@dataclass_json
@dataclass
class TimeSeriesDescriptor:
    label_descriptors: Optional[List[labeldescriptor.LabelDescriptor]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labelDescriptors' }})
    point_descriptors: Optional[List[valuedescriptor.ValueDescriptor]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pointDescriptors' }})
    
