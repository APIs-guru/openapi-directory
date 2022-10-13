from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import typedvalue
from . import collectdvalue


@dataclass_json
@dataclass
class CollectdPayload:
    end_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endTime' }})
    metadata: Optional[dict[str, typedvalue.TypedValue]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metadata' }})
    plugin: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'plugin' }})
    plugin_instance: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pluginInstance' }})
    start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startTime' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    type_instance: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'typeInstance' }})
    values: Optional[List[collectdvalue.CollectdValue]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'values' }})
    
