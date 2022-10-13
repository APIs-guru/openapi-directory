from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googlecloudassetv1p4beta1analysisstate


@dataclass_json
@dataclass
class GoogleCloudAssetV1p4beta1Access:
    analysis_state: Optional[googlecloudassetv1p4beta1analysisstate.GoogleCloudAssetV1p4beta1AnalysisState] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'analysisState' }})
    permission: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'permission' }})
    role: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'role' }})
    
