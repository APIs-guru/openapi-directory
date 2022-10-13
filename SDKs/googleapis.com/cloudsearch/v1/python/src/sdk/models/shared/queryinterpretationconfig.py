from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class QueryInterpretationConfig:
    force_disable_supplemental_results: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'forceDisableSupplementalResults' }})
    force_verbatim_mode: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'forceVerbatimMode' }})
    
