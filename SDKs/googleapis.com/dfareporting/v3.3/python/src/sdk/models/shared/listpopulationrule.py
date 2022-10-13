from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import listpopulationclause


@dataclass_json
@dataclass
class ListPopulationRule:
    floodlight_activity_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'floodlightActivityId' }})
    floodlight_activity_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'floodlightActivityName' }})
    list_population_clauses: Optional[List[listpopulationclause.ListPopulationClause]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'listPopulationClauses' }})
    
