from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2AnnotatedMessagePart:
    r"""GoogleCloudDialogflowV2AnnotatedMessagePart
    Represents a part of a message possibly annotated with an entity. The part can be an entity or purely a part of the message between two entities or message start/end.
    """
    
    entity_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entityType') }})
    formatted_value: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('formattedValue') }})
    text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('text') }})
    
