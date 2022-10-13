from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import iampolicyanalysisstate


@dataclass_json
@dataclass
class GoogleCloudAssetV1Identity:
    analysis_state: Optional[iampolicyanalysisstate.IamPolicyAnalysisState] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'analysisState' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    
