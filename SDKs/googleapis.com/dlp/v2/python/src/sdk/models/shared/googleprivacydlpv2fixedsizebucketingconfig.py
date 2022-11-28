from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GooglePrivacyDlpV2FixedSizeBucketingConfig:
    r"""GooglePrivacyDlpV2FixedSizeBucketingConfig
    Buckets values based on fixed size ranges. The Bucketing transformation can provide all of this functionality, but requires more configuration. This message is provided as a convenience to the user for simple bucketing strategies. The transformed value will be a hyphenated string of {lower_bound}-{upper_bound}. For example, if lower_bound = 10 and upper_bound = 20, all values that are within this bucket will be replaced with \"10-20\". This can be used on data of type: double, long. If the bound Value type differs from the type of data being transformed, we will first attempt converting the type of the data to be transformed to match the type of the bound before comparing. See https://cloud.google.com/dlp/docs/concepts-bucketing to learn more.
    """
    
    bucket_size: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bucketSize') }})
    lower_bound: Optional[GooglePrivacyDlpV2Value] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lowerBound') }})
    upper_bound: Optional[GooglePrivacyDlpV2Value] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('upperBound') }})
    
