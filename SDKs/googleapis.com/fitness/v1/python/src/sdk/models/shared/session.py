from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import application


@dataclass_json
@dataclass
class Session:
    active_time_millis: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'activeTimeMillis' }})
    activity_type: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'activityType' }})
    application: Optional[application.Application] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'application' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    end_time_millis: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endTimeMillis' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    modified_time_millis: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'modifiedTimeMillis' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    start_time_millis: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startTimeMillis' }})
    
