from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import filteringattribute


@dataclass_json
@dataclass
class EventType:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    event_schema_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'eventSchemaUri' }})
    filtering_attributes: Optional[List[filteringattribute.FilteringAttribute]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filteringAttributes' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
