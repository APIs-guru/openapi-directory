from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import abusetype
from . import relatedentity
from . import entity


@dataclass_json
@dataclass
class AbuseReport:
    abuse_types: Optional[List[abusetype.AbuseType]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'abuseTypes' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    related_entities: Optional[List[relatedentity.RelatedEntity]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'relatedEntities' }})
    subject: Optional[entity.Entity] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subject' }})
    
