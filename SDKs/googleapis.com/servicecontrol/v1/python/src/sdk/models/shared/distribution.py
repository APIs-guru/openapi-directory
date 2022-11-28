from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Distribution:
    r"""Distribution
    Distribution represents a frequency distribution of double-valued sample points. It contains the size of the population of sample points plus additional optional information: * the arithmetic mean of the samples * the minimum and maximum of the samples * the sum-squared-deviation of the samples, used to compute variance * a histogram of the values of the sample points
    """
    
    bucket_counts: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bucketCounts') }})
    count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    exemplars: Optional[List[Exemplar]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exemplars') }})
    explicit_buckets: Optional[ExplicitBuckets] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('explicitBuckets') }})
    exponential_buckets: Optional[ExponentialBuckets] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exponentialBuckets') }})
    linear_buckets: Optional[LinearBuckets] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('linearBuckets') }})
    maximum: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maximum') }})
    mean: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mean') }})
    minimum: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minimum') }})
    sum_of_squared_deviation: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sumOfSquaredDeviation') }})
    
