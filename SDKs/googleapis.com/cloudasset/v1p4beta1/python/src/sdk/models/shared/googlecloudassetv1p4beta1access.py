from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudAssetV1p4beta1Access:
    r"""GoogleCloudAssetV1p4beta1Access
    An IAM role or permission under analysis.
    """
    
    analysis_state: Optional[GoogleCloudAssetV1p4beta1AnalysisState] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('analysisState') }})
    permission: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('permission') }})
    role: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('role') }})
    
