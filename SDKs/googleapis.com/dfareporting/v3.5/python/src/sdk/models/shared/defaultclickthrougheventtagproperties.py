from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DefaultClickThroughEventTagProperties:
    default_click_through_event_tag_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'defaultClickThroughEventTagId' }})
    override_inherited_event_tag: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'overrideInheritedEventTag' }})
    
