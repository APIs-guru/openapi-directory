from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Subscription:
    custom: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'custom' }})
    database_hold_time_h: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'database_hold_time_h' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    events_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'events_url' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    populate_events: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'populate_events' }})
    target_delivery_last_failure: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'target_delivery_last_failure' }})
    target_delivery_status: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'target_delivery_status' }})
    target_retry: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'target_retry' }})
    target_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'target_url' }})
    time_created: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'time_created' }})
    time_updated: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'time_updated' }})
    topic_filter: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'topic_filter' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    verify_target_certificate: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'verify_target_certificate' }})
    
