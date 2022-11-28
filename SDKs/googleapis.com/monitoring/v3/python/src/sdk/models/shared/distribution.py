from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Distribution:
    r"""Distribution
    Distribution contains summary statistics for a population of values. It optionally contains a histogram representing the distribution of those values across a set of buckets.The summary statistics are the count, mean, sum of the squared deviation from the mean, the minimum, and the maximum of the set of population of values. The histogram is based on a sequence of buckets and gives a count of values that fall into each bucket. The boundaries of the buckets are given either explicitly or by formulas for buckets of fixed or exponentially increasing widths.Although it is not forbidden, it is generally a bad idea to include non-finite values (infinities or NaNs) in the population of values, as this will render the mean and sum_of_squared_deviation fields meaningless.
    """
    
    bucket_counts: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bucketCounts') }})
    bucket_options: Optional[BucketOptions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bucketOptions') }})
    count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    exemplars: Optional[List[Exemplar]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exemplars') }})
    mean: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mean') }})
    range: Optional[Range] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('range') }})
    sum_of_squared_deviation: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sumOfSquaredDeviation') }})
    
