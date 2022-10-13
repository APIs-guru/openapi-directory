from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import servicelevelobjective


@dataclass_json
@dataclass
class ListServiceLevelObjectivesResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    service_level_objectives: Optional[List[servicelevelobjective.ServiceLevelObjective]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceLevelObjectives' }})
    
