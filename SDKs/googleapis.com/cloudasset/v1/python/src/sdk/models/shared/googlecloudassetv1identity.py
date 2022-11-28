from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudAssetV1Identity:
    r"""GoogleCloudAssetV1Identity
    An identity under analysis.
    """
    
    analysis_state: Optional[IamPolicyAnalysisState] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('analysisState') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
