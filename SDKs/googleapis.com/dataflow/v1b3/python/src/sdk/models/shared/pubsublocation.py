from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PubsubLocation:
    drop_late_data: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dropLateData' }})
    id_label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'idLabel' }})
    subscription: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subscription' }})
    timestamp_label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timestampLabel' }})
    topic: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'topic' }})
    tracking_subscription: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'trackingSubscription' }})
    with_attributes: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'withAttributes' }})
    
