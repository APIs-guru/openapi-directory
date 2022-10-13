from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class LookbackConfiguration:
    click_duration: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clickDuration' }})
    post_impression_activities_duration: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'postImpressionActivitiesDuration' }})
    
