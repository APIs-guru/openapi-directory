from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Jurisdiction:
    classification: JurisdictionClassificationEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('classification') }})
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    division_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('division_id') }})
    latest_runs: Optional[List[RunPlan]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('latest_runs') }})
    legislative_sessions: Optional[List[LegislativeSession]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('legislative_sessions') }})
    organizations: Optional[List[Chamber]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('organizations') }})
    
