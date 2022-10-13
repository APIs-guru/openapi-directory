from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from dataclasses_json import dataclass_json
from . import eventtopicaction_enum
from . import eventtopicresourcetype_enum


@dataclass_json
@dataclass
class EventTopic:
    action: Optional[eventtopicaction_enum.EventTopicActionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'action' }})
    arguments: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'arguments' }})
    resource_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resource_id' }})
    resource_type: Optional[eventtopicresourcetype_enum.EventTopicResourceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resource_type' }})
    resource_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resource_url' }})
    

@dataclass_json
@dataclass
class Event:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    payload: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'payload' }})
    time_created: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'time_created' }})
    time_event: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'time_event' }})
    time_expire: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'time_expire' }})
    topic: Optional[EventTopic] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'topic' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    
