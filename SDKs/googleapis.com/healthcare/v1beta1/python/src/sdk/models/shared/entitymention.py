from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class EntityMention:
    r"""EntityMention
    An entity mention in the document.
    """
    
    certainty_assessment: Optional[Feature] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('certaintyAssessment') }})
    confidence: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('confidence') }})
    linked_entities: Optional[List[LinkedEntity]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('linkedEntities') }})
    mention_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mentionId') }})
    subject: Optional[Feature] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subject') }})
    temporal_assessment: Optional[Feature] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('temporalAssessment') }})
    text: Optional[TextSpan] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('text') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
