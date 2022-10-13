from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import jurisdictionclassification_enum
from . import runplan
from . import legislativesession
from . import chamber


@dataclass_json
@dataclass
class Jurisdiction:
    classification: jurisdictionclassification_enum.JurisdictionClassificationEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'classification' }})
    division_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'division_id' }})
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    latest_runs: Optional[List[runplan.RunPlan]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'latest_runs' }})
    legislative_sessions: Optional[List[legislativesession.LegislativeSession]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'legislative_sessions' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    organizations: Optional[List[chamber.Chamber]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'organizations' }})
    url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    
