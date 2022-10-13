from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2beta1AnnotatedMessagePart:
    entity_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entityType' }})
    formatted_value: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'formattedValue' }})
    text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'text' }})
    
