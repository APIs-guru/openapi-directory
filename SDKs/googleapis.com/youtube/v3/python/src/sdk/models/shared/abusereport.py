from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AbuseReport:
    abuse_types: Optional[List[AbuseType]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('abuseTypes') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    related_entities: Optional[List[RelatedEntity]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('relatedEntities') }})
    subject: Optional[Entity] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subject') }})
    
