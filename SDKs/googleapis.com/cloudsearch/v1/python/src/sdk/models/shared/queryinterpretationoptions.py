from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class QueryInterpretationOptions:
    disable_nl_interpretation: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disableNlInterpretation' }})
    disable_supplemental_results: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disableSupplementalResults' }})
    enable_verbatim_mode: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enableVerbatimMode' }})
    
