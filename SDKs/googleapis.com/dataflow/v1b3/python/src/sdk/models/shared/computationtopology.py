from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import streamlocation
from . import keyrangelocation
from . import streamlocation
from . import statefamilyconfig


@dataclass_json
@dataclass
class ComputationTopology:
    computation_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'computationId' }})
    inputs: Optional[List[streamlocation.StreamLocation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inputs' }})
    key_ranges: Optional[List[keyrangelocation.KeyRangeLocation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'keyRanges' }})
    outputs: Optional[List[streamlocation.StreamLocation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'outputs' }})
    state_families: Optional[List[statefamilyconfig.StateFamilyConfig]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stateFamilies' }})
    system_stage_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'systemStageName' }})
    
