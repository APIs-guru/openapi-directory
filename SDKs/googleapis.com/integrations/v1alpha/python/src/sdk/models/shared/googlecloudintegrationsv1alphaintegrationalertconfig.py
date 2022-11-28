from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class GoogleCloudIntegrationsV1alphaIntegrationAlertConfigMetricTypeEnum(str, Enum):
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

class GoogleCloudIntegrationsV1alphaIntegrationAlertConfigThresholdTypeEnum(str, Enum):
    THRESHOLD_TYPE_UNSPECIFIED = "THRESHOLD_TYPE_UNSPECIFIED"
    EXPECTED_MIN = "EXPECTED_MIN"
    EXPECTED_MAX = "EXPECTED_MAX"


@dataclass_json
@dataclass
class GoogleCloudIntegrationsV1alphaIntegrationAlertConfig:
    r"""GoogleCloudIntegrationsV1alphaIntegrationAlertConfig
    Message to be used to configure custom alerting in the {@code EventConfig} protos for an event.
    """
    
    aggregation_period: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('aggregationPeriod') }})
    alert_threshold: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('alertThreshold') }})
    disable_alert: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disableAlert') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    duration_threshold: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('durationThreshold') }})
    metric_type: Optional[GoogleCloudIntegrationsV1alphaIntegrationAlertConfigMetricTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metricType') }})
    only_final_attempt: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('onlyFinalAttempt') }})
    threshold_type: Optional[GoogleCloudIntegrationsV1alphaIntegrationAlertConfigThresholdTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thresholdType') }})
    threshold_value: Optional[GoogleCloudIntegrationsV1alphaIntegrationAlertConfigThresholdValue] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thresholdValue') }})
    
