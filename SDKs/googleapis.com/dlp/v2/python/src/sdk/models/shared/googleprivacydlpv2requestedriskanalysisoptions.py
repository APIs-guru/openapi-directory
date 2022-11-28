from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GooglePrivacyDlpV2RequestedRiskAnalysisOptions:
    r"""GooglePrivacyDlpV2RequestedRiskAnalysisOptions
    Risk analysis options.
    """
    
    job_config: Optional[GooglePrivacyDlpV2RiskAnalysisJobConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobConfig') }})
    
