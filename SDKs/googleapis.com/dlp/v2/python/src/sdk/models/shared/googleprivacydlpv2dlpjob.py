from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class GooglePrivacyDlpV2DlpJobStateEnum(str, Enum):
    JOB_STATE_UNSPECIFIED = "JOB_STATE_UNSPECIFIED"
    PENDING = "PENDING"
    RUNNING = "RUNNING"
    DONE = "DONE"
    CANCELED = "CANCELED"
    FAILED = "FAILED"
    ACTIVE = "ACTIVE"

class GooglePrivacyDlpV2DlpJobTypeEnum(str, Enum):
    DLP_JOB_TYPE_UNSPECIFIED = "DLP_JOB_TYPE_UNSPECIFIED"
    INSPECT_JOB = "INSPECT_JOB"
    RISK_ANALYSIS_JOB = "RISK_ANALYSIS_JOB"


@dataclass_json
@dataclass
class GooglePrivacyDlpV2DlpJob:
    r"""GooglePrivacyDlpV2DlpJob
    Combines all of the information about a DLP job.
    """
    
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    end_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endTime') }})
    errors: Optional[List[GooglePrivacyDlpV2Error]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    inspect_details: Optional[GooglePrivacyDlpV2InspectDataSourceDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inspectDetails') }})
    job_trigger_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobTriggerName') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    risk_details: Optional[GooglePrivacyDlpV2AnalyzeDataSourceRiskDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('riskDetails') }})
    start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startTime') }})
    state: Optional[GooglePrivacyDlpV2DlpJobStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    type: Optional[GooglePrivacyDlpV2DlpJobTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
