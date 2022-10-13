from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import schemagroup
from . import schemasegment


@dataclass_json
@dataclass
class GroupOrSegment:
    group: Optional[schemagroup.SchemaGroup] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'group' }})
    segment: Optional[schemasegment.SchemaSegment] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'segment' }})
    
