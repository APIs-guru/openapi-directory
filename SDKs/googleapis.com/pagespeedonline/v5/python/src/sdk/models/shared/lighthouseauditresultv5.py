from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class LighthouseAuditResultV5:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    details: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'details' }})
    display_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayValue' }})
    error_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errorMessage' }})
    explanation: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'explanation' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    numeric_unit: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'numericUnit' }})
    numeric_value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'numericValue' }})
    score: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'score' }})
    score_display_mode: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scoreDisplayMode' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    warnings: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'warnings' }})
    
