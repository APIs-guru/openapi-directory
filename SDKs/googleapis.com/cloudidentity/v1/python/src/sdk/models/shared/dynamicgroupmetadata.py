from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import dynamicgroupquery
from . import dynamicgroupstatus


@dataclass_json
@dataclass
class DynamicGroupMetadata:
    queries: Optional[List[dynamicgroupquery.DynamicGroupQuery]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'queries' }})
    status: Optional[dynamicgroupstatus.DynamicGroupStatus] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
