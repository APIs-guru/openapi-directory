from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import entity
from . import entitymention
from . import entitymentionrelationship


@dataclass_json
@dataclass
class AnalyzeEntitiesResponse:
    entities: Optional[List[entity.Entity]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entities' }})
    entity_mentions: Optional[List[entitymention.EntityMention]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entityMentions' }})
    relationships: Optional[List[entitymentionrelationship.EntityMentionRelationship]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'relationships' }})
    
