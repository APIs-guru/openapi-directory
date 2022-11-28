from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GooglePrivacyDlpV2CreateDlpJobRequest:
    r"""GooglePrivacyDlpV2CreateDlpJobRequest
    Request message for CreateDlpJobRequest. Used to initiate long running jobs such as calculating risk metrics or inspecting Google Cloud Storage.
    """
    
    inspect_job: Optional[GooglePrivacyDlpV2InspectJobConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inspectJob') }})
    job_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobId') }})
    location_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('locationId') }})
    risk_job: Optional[GooglePrivacyDlpV2RiskAnalysisJobConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('riskJob') }})
    
