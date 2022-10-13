from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import googleprivacydlpv2error
from . import googleprivacydlpv2inspectdatasourcedetails
from . import googleprivacydlpv2analyzedatasourceriskdetails

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
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    end_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endTime' }})
    errors: Optional[List[googleprivacydlpv2error.GooglePrivacyDlpV2Error]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    inspect_details: Optional[googleprivacydlpv2inspectdatasourcedetails.GooglePrivacyDlpV2InspectDataSourceDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inspectDetails' }})
    job_trigger_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jobTriggerName' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    risk_details: Optional[googleprivacydlpv2analyzedatasourceriskdetails.GooglePrivacyDlpV2AnalyzeDataSourceRiskDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'riskDetails' }})
    start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startTime' }})
    state: Optional[GooglePrivacyDlpV2DlpJobStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    type: Optional[GooglePrivacyDlpV2DlpJobTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
