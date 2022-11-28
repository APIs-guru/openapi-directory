from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AdministrationRegion:
    r"""AdministrationRegion
    Describes information about a regional election administrative area.
    """
    
    election_administration_body: Optional[AdministrativeBody] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('electionAdministrationBody') }})
    local_jurisdiction: Optional[AdministrationRegion] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('local_jurisdiction') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    sources: Optional[List[Source]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sources') }})
    
