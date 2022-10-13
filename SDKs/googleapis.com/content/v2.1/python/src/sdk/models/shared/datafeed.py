from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import datafeedfetchschedule
from . import datafeedformat
from . import datafeedtarget


@dataclass_json
@dataclass
class Datafeed:
    attribute_language: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attributeLanguage' }})
    content_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contentType' }})
    fetch_schedule: Optional[datafeedfetchschedule.DatafeedFetchSchedule] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fetchSchedule' }})
    file_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fileName' }})
    format: Optional[datafeedformat.DatafeedFormat] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'format' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    targets: Optional[List[datafeedtarget.DatafeedTarget]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targets' }})
    
