from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDatalabelingV1beta1SearchExampleComparisonsResponse:
    r"""GoogleCloudDatalabelingV1beta1SearchExampleComparisonsResponse
    Results of searching example comparisons.
    """
    
    example_comparisons: Optional[List[GoogleCloudDatalabelingV1beta1ExampleComparison]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exampleComparisons') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
