from dataclasses import dataclass, field
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class GoogleCloudDataplexV1DataScanJobStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    RUNNING = "RUNNING"
    CANCELING = "CANCELING"
    CANCELLED = "CANCELLED"
    SUCCEEDED = "SUCCEEDED"
    FAILED = "FAILED"
    PENDING = "PENDING"

class GoogleCloudDataplexV1DataScanJobTypeEnum(str, Enum):
    DATA_SCAN_TYPE_UNSPECIFIED = "DATA_SCAN_TYPE_UNSPECIFIED"
    DATA_QUALITY = "DATA_QUALITY"
    DATA_PROFILE = "DATA_PROFILE"


@dataclass_json
@dataclass
class GoogleCloudDataplexV1DataScanJob:
    r"""GoogleCloudDataplexV1DataScanJob
    A DataScanJob represents an instance of a data scan.
    """
    
    data_profile_result: Optional[GoogleCloudDataplexV1DataProfileResult] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataProfileResult') }})
    data_profile_spec: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataProfileSpec') }})
    data_quality_result: Optional[GoogleCloudDataplexV1DataQualityResult] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataQualityResult') }})
    data_quality_spec: Optional[GoogleCloudDataplexV1DataQualitySpec] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataQualitySpec') }})
    end_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endTime') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startTime') }})
    state: Optional[GoogleCloudDataplexV1DataScanJobStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    type: Optional[GoogleCloudDataplexV1DataScanJobTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    uid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uid') }})
    
