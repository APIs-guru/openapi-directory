from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class EntityMentionRelationship:
    r"""EntityMentionRelationship
    Defines directed relationship from one entity mention to another.
    """
    
    confidence: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('confidence') }})
    object_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('objectId') }})
    subject_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subjectId') }})
    
