from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class MetricDescriptorLaunchStageEnum(str, Enum):
    LAUNCH_STAGE_UNSPECIFIED = "LAUNCH_STAGE_UNSPECIFIED"
    UNIMPLEMENTED = "UNIMPLEMENTED"
    PRELAUNCH = "PRELAUNCH"
    EARLY_ACCESS = "EARLY_ACCESS"
    ALPHA = "ALPHA"
    BETA = "BETA"
    GA = "GA"
    DEPRECATED = "DEPRECATED"

class MetricDescriptorMetricKindEnum(str, Enum):
    METRIC_KIND_UNSPECIFIED = "METRIC_KIND_UNSPECIFIED"
    GAUGE = "GAUGE"
    DELTA = "DELTA"
    CUMULATIVE = "CUMULATIVE"

class MetricDescriptorValueTypeEnum(str, Enum):
    VALUE_TYPE_UNSPECIFIED = "VALUE_TYPE_UNSPECIFIED"
    BOOL = "BOOL"
    INT64 = "INT64"
    DOUBLE = "DOUBLE"
    STRING = "STRING"
    DISTRIBUTION = "DISTRIBUTION"
    MONEY = "MONEY"


@dataclass_json
@dataclass
class MetricDescriptor:
    r"""MetricDescriptor
    Defines a metric type and its schema. Once a metric descriptor is created, deleting or altering it stops data collection and makes the metric type's existing data unusable. 
    """
    
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    labels: Optional[List[LabelDescriptor]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    launch_stage: Optional[MetricDescriptorLaunchStageEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('launchStage') }})
    metadata: Optional[MetricDescriptorMetadata] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    metric_kind: Optional[MetricDescriptorMetricKindEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metricKind') }})
    monitored_resource_types: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('monitoredResourceTypes') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    unit: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unit') }})
    value_type: Optional[MetricDescriptorValueTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('valueType') }})
    
