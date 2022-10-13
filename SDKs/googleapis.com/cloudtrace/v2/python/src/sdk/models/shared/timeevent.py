from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import annotation
from . import messageevent


@dataclass_json
@dataclass
class TimeEvent:
    annotation: Optional[annotation.Annotation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'annotation' }})
    message_event: Optional[messageevent.MessageEvent] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'messageEvent' }})
    time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'time' }})
    
