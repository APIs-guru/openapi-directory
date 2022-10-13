from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import numericbucketingresult


@dataclass_json
@dataclass
class CustomAttributeHistogramResult:
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    long_value_histogram_result: Optional[numericbucketingresult.NumericBucketingResult] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'longValueHistogramResult' }})
    string_value_histogram_result: Optional[dict[str, int]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stringValueHistogramResult' }})
    
