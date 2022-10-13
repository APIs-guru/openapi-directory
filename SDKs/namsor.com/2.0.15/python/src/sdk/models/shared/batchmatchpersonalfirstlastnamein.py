from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import matchpersonalfirstlastnamein


@dataclass_json
@dataclass
class BatchMatchPersonalFirstLastNameIn:
    personal_names: Optional[List[matchpersonalfirstlastnamein.MatchPersonalFirstLastNameIn]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'personalNames' }})
    
