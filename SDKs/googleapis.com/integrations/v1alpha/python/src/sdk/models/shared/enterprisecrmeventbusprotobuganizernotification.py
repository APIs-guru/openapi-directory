from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class EnterpriseCrmEventbusProtoBuganizerNotification:
    assignee_email_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assigneeEmailAddress' }})
    component_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'componentId' }})
    template_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'templateId' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    
