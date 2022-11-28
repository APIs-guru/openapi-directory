from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CustomAttributeHistogramResult:
    r"""CustomAttributeHistogramResult
    Output only. Custom attribute histogram result.
    """
    
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    long_value_histogram_result: Optional[NumericBucketingResult] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('longValueHistogramResult') }})
    string_value_histogram_result: Optional[dict[str, int]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stringValueHistogramResult') }})
    
