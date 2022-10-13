from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import propernouncategorizedout


@dataclass_json
@dataclass
class BatchProperNounCategorizedOut:
    proper_nouns: Optional[List[propernouncategorizedout.ProperNounCategorizedOut]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'properNouns' }})
    
