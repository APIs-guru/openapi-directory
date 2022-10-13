from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import labeldescriptor
from . import metricdescriptormetadata

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
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    labels: Optional[List[labeldescriptor.LabelDescriptor]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    launch_stage: Optional[MetricDescriptorLaunchStageEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'launchStage' }})
    metadata: Optional[metricdescriptormetadata.MetricDescriptorMetadata] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metadata' }})
    metric_kind: Optional[MetricDescriptorMetricKindEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metricKind' }})
    monitored_resource_types: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'monitoredResourceTypes' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    unit: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unit' }})
    value_type: Optional[MetricDescriptorValueTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'valueType' }})
    
