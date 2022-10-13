from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import escalation


@dataclass_json
@dataclass
class EscalateCaseRequest:
    escalation: Optional[escalation.Escalation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'escalation' }})
    
