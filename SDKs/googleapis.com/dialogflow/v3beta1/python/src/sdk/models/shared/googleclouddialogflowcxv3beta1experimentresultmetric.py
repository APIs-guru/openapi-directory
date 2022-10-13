from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowcxv3beta1experimentresultconfidenceinterval

class GoogleCloudDialogflowCxV3beta1ExperimentResultMetricCountTypeEnum(str, Enum):
    COUNT_TYPE_UNSPECIFIED = "COUNT_TYPE_UNSPECIFIED"
    TOTAL_NO_MATCH_COUNT = "TOTAL_NO_MATCH_COUNT"
    TOTAL_TURN_COUNT = "TOTAL_TURN_COUNT"
    AVERAGE_TURN_COUNT = "AVERAGE_TURN_COUNT"

class GoogleCloudDialogflowCxV3beta1ExperimentResultMetricTypeEnum(str, Enum):
    METRIC_UNSPECIFIED = "METRIC_UNSPECIFIED"
    CONTAINED_SESSION_NO_CALLBACK_RATE = "CONTAINED_SESSION_NO_CALLBACK_RATE"
    LIVE_AGENT_HANDOFF_RATE = "LIVE_AGENT_HANDOFF_RATE"
    CALLBACK_SESSION_RATE = "CALLBACK_SESSION_RATE"
    ABANDONED_SESSION_RATE = "ABANDONED_SESSION_RATE"
    SESSION_END_RATE = "SESSION_END_RATE"


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3beta1ExperimentResultMetric:
    confidence_interval: Optional[googleclouddialogflowcxv3beta1experimentresultconfidenceinterval.GoogleCloudDialogflowCxV3beta1ExperimentResultConfidenceInterval] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'confidenceInterval' }})
    count: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'count' }})
    count_type: Optional[GoogleCloudDialogflowCxV3beta1ExperimentResultMetricCountTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'countType' }})
    ratio: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ratio' }})
    type: Optional[GoogleCloudDialogflowCxV3beta1ExperimentResultMetricTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
