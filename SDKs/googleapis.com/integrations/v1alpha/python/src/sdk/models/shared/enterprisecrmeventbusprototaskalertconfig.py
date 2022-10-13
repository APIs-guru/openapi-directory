from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import enterprisecrmeventbusprotobasealertconfigerrorenumlist
from . import enterprisecrmeventbusprotobasealertconfigthresholdvalue
from . import enterprisecrmeventbusprotobasealertconfigerrorenumlist

class EnterpriseCrmEventbusProtoTaskAlertConfigMetricTypeEnum(str, Enum):
    METRIC_TYPE_UNSPECIFIED = "METRIC_TYPE_UNSPECIFIED"
    TASK_ERROR_RATE = "TASK_ERROR_RATE"
    TASK_WARNING_RATE = "TASK_WARNING_RATE"
    TASK_RATE = "TASK_RATE"
    TASK_AVERAGE_DURATION = "TASK_AVERAGE_DURATION"
    TASK_PERCENTILE_DURATION = "TASK_PERCENTILE_DURATION"

class EnterpriseCrmEventbusProtoTaskAlertConfigThresholdTypeEnum(str, Enum):
    UNSPECIFIED_THRESHOLD_TYPE = "UNSPECIFIED_THRESHOLD_TYPE"
    EXPECTED_MIN = "EXPECTED_MIN"
    EXPECTED_MAX = "EXPECTED_MAX"


@dataclass_json
@dataclass
class EnterpriseCrmEventbusProtoTaskAlertConfig:
    aggregation_period: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'aggregationPeriod' }})
    alert_disabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'alertDisabled' }})
    alert_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'alertName' }})
    client_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientId' }})
    duration_threshold_ms: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'durationThresholdMs' }})
    error_enum_list: Optional[enterprisecrmeventbusprotobasealertconfigerrorenumlist.EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumList] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errorEnumList' }})
    metric_type: Optional[EnterpriseCrmEventbusProtoTaskAlertConfigMetricTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metricType' }})
    num_aggregation_periods: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'numAggregationPeriods' }})
    only_final_attempt: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'onlyFinalAttempt' }})
    playbook_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'playbookUrl' }})
    threshold_type: Optional[EnterpriseCrmEventbusProtoTaskAlertConfigThresholdTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'thresholdType' }})
    threshold_value: Optional[enterprisecrmeventbusprotobasealertconfigthresholdvalue.EnterpriseCrmEventbusProtoBaseAlertConfigThresholdValue] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'thresholdValue' }})
    warning_enum_list: Optional[enterprisecrmeventbusprotobasealertconfigerrorenumlist.EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumList] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'warningEnumList' }})
    
