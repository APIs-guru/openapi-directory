from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GooglePrivacyDlpV2KAnonymityResult:
    r"""GooglePrivacyDlpV2KAnonymityResult
    Result of the k-anonymity computation.
    """
    
    equivalence_class_histogram_buckets: Optional[List[GooglePrivacyDlpV2KAnonymityHistogramBucket]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('equivalenceClassHistogramBuckets') }})
    
