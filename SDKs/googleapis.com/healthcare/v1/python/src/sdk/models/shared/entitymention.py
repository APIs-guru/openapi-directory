from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import feature
from . import linkedentity
from . import feature
from . import feature
from . import textspan


@dataclass_json
@dataclass
class EntityMention:
    certainty_assessment: Optional[feature.Feature] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'certaintyAssessment' }})
    confidence: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'confidence' }})
    linked_entities: Optional[List[linkedentity.LinkedEntity]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'linkedEntities' }})
    mention_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mentionId' }})
    subject: Optional[feature.Feature] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subject' }})
    temporal_assessment: Optional[feature.Feature] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'temporalAssessment' }})
    text: Optional[textspan.TextSpan] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'text' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
