from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import statecondition
from . import destination
from . import eventfilter
from . import transport


@dataclass_json
@dataclass
class Trigger:
    channel: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'channel' }})
    conditions: Optional[dict[str, statecondition.StateCondition]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'conditions' }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    destination: Optional[destination.Destination] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destination' }})
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'etag' }})
    event_filters: Optional[List[eventfilter.EventFilter]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'eventFilters' }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    service_account: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceAccount' }})
    transport: Optional[transport.Transport] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transport' }})
    uid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uid' }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateTime' }})
    
