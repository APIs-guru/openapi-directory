from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import listpopulationterm


@dataclass_json
@dataclass
class ListPopulationClause:
    terms: Optional[List[listpopulationterm.ListPopulationTerm]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'terms' }})
    
