from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class GoogleCloudDataplexV1DataScanStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    ACTIVE = "ACTIVE"
    CREATING = "CREATING"
    DELETING = "DELETING"
    ACTION_REQUIRED = "ACTION_REQUIRED"

class GoogleCloudDataplexV1DataScanTypeEnum(str, Enum):
    DATA_SCAN_TYPE_UNSPECIFIED = "DATA_SCAN_TYPE_UNSPECIFIED"
    DATA_QUALITY = "DATA_QUALITY"
    DATA_PROFILE = "DATA_PROFILE"


@dataclass_json
@dataclass
class GoogleCloudDataplexV1DataScan:
    r"""GoogleCloudDataplexV1DataScan
    Represents a user-visible job which provides the insights for the related data source. For examples: - Data Quality: generates queries based on the rules and run against the data to get data quality check results. - Data Profile: analyzes the data in table(s) and generates insights about the structure, content and relationships (such as null percent, cardinality, min/max/mean, etc).
    """
    
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    data: Optional[GoogleCloudDataplexV1DataSource] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    data_profile_result: Optional[GoogleCloudDataplexV1DataProfileResult] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataProfileResult') }})
    data_profile_spec: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataProfileSpec') }})
    data_quality_result: Optional[GoogleCloudDataplexV1DataQualityResult] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataQualityResult') }})
    data_quality_spec: Optional[GoogleCloudDataplexV1DataQualitySpec] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataQualitySpec') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    execution_spec: Optional[GoogleCloudDataplexV1DataScanExecutionSpec] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('executionSpec') }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    state: Optional[GoogleCloudDataplexV1DataScanStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    type: Optional[GoogleCloudDataplexV1DataScanTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    uid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uid') }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    

@dataclass_json
@dataclass
class GoogleCloudDataplexV1DataScanInput:
    r"""GoogleCloudDataplexV1DataScanInput
    Represents a user-visible job which provides the insights for the related data source. For examples: - Data Quality: generates queries based on the rules and run against the data to get data quality check results. - Data Profile: analyzes the data in table(s) and generates insights about the structure, content and relationships (such as null percent, cardinality, min/max/mean, etc).
    """
    
    data: Optional[GoogleCloudDataplexV1DataSource] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    data_profile_result: Optional[GoogleCloudDataplexV1DataProfileResult] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataProfileResult') }})
    data_profile_spec: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataProfileSpec') }})
    data_quality_result: Optional[GoogleCloudDataplexV1DataQualityResult] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataQualityResult') }})
    data_quality_spec: Optional[GoogleCloudDataplexV1DataQualitySpec] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataQualitySpec') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    execution_spec: Optional[GoogleCloudDataplexV1DataScanExecutionSpec] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('executionSpec') }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    
