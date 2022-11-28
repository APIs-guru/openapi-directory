from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class LogMetricVersionEnum(str, Enum):
    V2 = "V2"
    V1 = "V1"


@dataclass_json
@dataclass
class LogMetric:
    r"""LogMetric
    Describes a logs-based metric. The value of the metric is the number of log entries that match a logs filter in a given time interval.Logs-based metrics can also be used to extract values from logs and create a distribution of the values. The distribution records the statistics of the extracted values along with an optional histogram of the values as specified by the bucket options.
    """
    
    bucket_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bucketName') }})
    bucket_options: Optional[BucketOptions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bucketOptions') }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    disabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disabled') }})
    filter: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filter') }})
    label_extractors: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labelExtractors') }})
    metric_descriptor: Optional[MetricDescriptor] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metricDescriptor') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    value_extractor: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('valueExtractor') }})
    version: Optional[LogMetricVersionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    

@dataclass_json
@dataclass
class LogMetricInput:
    r"""LogMetricInput
    Describes a logs-based metric. The value of the metric is the number of log entries that match a logs filter in a given time interval.Logs-based metrics can also be used to extract values from logs and create a distribution of the values. The distribution records the statistics of the extracted values along with an optional histogram of the values as specified by the bucket options.
    """
    
    bucket_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bucketName') }})
    bucket_options: Optional[BucketOptions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bucketOptions') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    disabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disabled') }})
    filter: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filter') }})
    label_extractors: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labelExtractors') }})
    metric_descriptor: Optional[MetricDescriptor] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metricDescriptor') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    value_extractor: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('valueExtractor') }})
    version: Optional[LogMetricVersionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    
