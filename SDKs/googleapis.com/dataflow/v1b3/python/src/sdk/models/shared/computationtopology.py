from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ComputationTopology:
    r"""ComputationTopology
    All configuration data for a particular Computation.
    """
    
    computation_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('computationId') }})
    inputs: Optional[List[StreamLocation]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inputs') }})
    key_ranges: Optional[List[KeyRangeLocation]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('keyRanges') }})
    outputs: Optional[List[StreamLocation]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('outputs') }})
    state_families: Optional[List[StateFamilyConfig]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stateFamilies') }})
    system_stage_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('systemStageName') }})
    
