from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class LinkedEntity:
    r"""LinkedEntity
    EntityMentions can be linked to multiple entities using a LinkedEntity message lets us add other fields, e.g. confidence.
    """
    
    entity_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entityId') }})
    
