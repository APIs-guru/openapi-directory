from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class EnterpriseCrmEventbusProtoWorkflowAlertConfigMetricTypeEnum(str, Enum):
    METRIC_TYPE_UNSPECIFIED = "METRIC_TYPE_UNSPECIFIED"
    EVENT_ERROR_RATE = "EVENT_ERROR_RATE"
    EVENT_WARNING_RATE = "EVENT_WARNING_RATE"
    TASK_ERROR_RATE = "TASK_ERROR_RATE"
    TASK_WARNING_RATE = "TASK_WARNING_RATE"
    TASK_RATE = "TASK_RATE"
    EVENT_RATE = "EVENT_RATE"
    EVENT_AVERAGE_DURATION = "EVENT_AVERAGE_DURATION"
    EVENT_PERCENTILE_DURATION = "EVENT_PERCENTILE_DURATION"
    TASK_AVERAGE_DURATION = "TASK_AVERAGE_DURATION"
    TASK_PERCENTILE_DURATION = "TASK_PERCENTILE_DURATION"

class EnterpriseCrmEventbusProtoWorkflowAlertConfigThresholdTypeEnum(str, Enum):
    UNSPECIFIED_THRESHOLD_TYPE = "UNSPECIFIED_THRESHOLD_TYPE"
    EXPECTED_MIN = "EXPECTED_MIN"
    EXPECTED_MAX = "EXPECTED_MAX"


@dataclass_json
@dataclass
class EnterpriseCrmEventbusProtoWorkflowAlertConfig:
    r"""EnterpriseCrmEventbusProtoWorkflowAlertConfig
    Message to be used to configure custom alerting in the {@code EventConfig} protos for an event. See go/eventbus-alert-config-examples for examples of the different alerts that can be configured.
    """
    
    aggregation_period: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('aggregationPeriod') }})
    alert_disabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('alertDisabled') }})
    alert_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('alertName') }})
    client_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientId') }})
    duration_threshold_ms: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('durationThresholdMs') }})
    error_enum_list: Optional[EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumList] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorEnumList') }})
    metric_type: Optional[EnterpriseCrmEventbusProtoWorkflowAlertConfigMetricTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metricType') }})
    num_aggregation_periods: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('numAggregationPeriods') }})
    only_final_attempt: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('onlyFinalAttempt') }})
    playbook_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('playbookUrl') }})
    threshold_type: Optional[EnterpriseCrmEventbusProtoWorkflowAlertConfigThresholdTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thresholdType') }})
    threshold_value: Optional[EnterpriseCrmEventbusProtoBaseAlertConfigThresholdValue] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thresholdValue') }})
    warning_enum_list: Optional[EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumList] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('warningEnumList') }})
    
