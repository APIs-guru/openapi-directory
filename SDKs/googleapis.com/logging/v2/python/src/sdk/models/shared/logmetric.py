from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import bucketoptions
from . import metricdescriptor

class LogMetricVersionEnum(str, Enum):
    V2 = "V2"
    V1 = "V1"


@dataclass_json
@dataclass
class LogMetric:
    bucket_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bucketName' }})
    bucket_options: Optional[bucketoptions.BucketOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bucketOptions' }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    disabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disabled' }})
    filter: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filter' }})
    label_extractors: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labelExtractors' }})
    metric_descriptor: Optional[metricdescriptor.MetricDescriptor] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metricDescriptor' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateTime' }})
    value_extractor: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'valueExtractor' }})
    version: Optional[LogMetricVersionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    
