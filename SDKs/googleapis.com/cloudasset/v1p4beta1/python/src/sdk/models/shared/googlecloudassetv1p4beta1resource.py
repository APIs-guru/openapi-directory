from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudAssetV1p4beta1Resource:
    r"""GoogleCloudAssetV1p4beta1Resource
    A Google Cloud resource under analysis.
    """
    
    analysis_state: Optional[GoogleCloudAssetV1p4beta1AnalysisState] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('analysisState') }})
    full_resource_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fullResourceName') }})
    
