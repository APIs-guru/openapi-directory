from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudDocumentaiV1beta2DocumentEntityRelation:
    r"""GoogleCloudDocumentaiV1beta2DocumentEntityRelation
    Relationship between Entities.
    """
    
    object_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('objectId') }})
    relation: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('relation') }})
    subject_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subjectId') }})
    
