from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

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
    r"""EnterpriseCrmEventbusProtoTaskAlertConfig
    Message to be used to configure alerting in the {@code TaskConfig} protos for tasks in an event. See go/eventbus-alert-config-examples for examples of the different alerts that can be configured.
    """
    
    aggregation_period: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('aggregationPeriod') }})
    alert_disabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('alertDisabled') }})
    alert_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('alertName') }})
    client_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientId') }})
    duration_threshold_ms: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('durationThresholdMs') }})
    error_enum_list: Optional[EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumList] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorEnumList') }})
    metric_type: Optional[EnterpriseCrmEventbusProtoTaskAlertConfigMetricTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metricType') }})
    num_aggregation_periods: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('numAggregationPeriods') }})
    only_final_attempt: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('onlyFinalAttempt') }})
    playbook_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('playbookUrl') }})
    threshold_type: Optional[EnterpriseCrmEventbusProtoTaskAlertConfigThresholdTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thresholdType') }})
    threshold_value: Optional[EnterpriseCrmEventbusProtoBaseAlertConfigThresholdValue] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thresholdValue') }})
    warning_enum_list: Optional[EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumList] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('warningEnumList') }})
    
