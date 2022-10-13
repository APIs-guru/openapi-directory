from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import numericbucketingoption


@dataclass_json
@dataclass
class CustomAttributeHistogramRequest:
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    long_value_histogram_bucketing_option: Optional[numericbucketingoption.NumericBucketingOption] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'longValueHistogramBucketingOption' }})
    string_value_histogram: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stringValueHistogram' }})
    
