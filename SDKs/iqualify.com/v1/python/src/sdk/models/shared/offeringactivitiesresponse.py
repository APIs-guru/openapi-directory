from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class OfferingActivitiesResponse:
    activity_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'activityId' }})
    time: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'time' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    
