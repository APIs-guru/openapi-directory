from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDatalabelingV1beta1ExampleComparison:
    r"""GoogleCloudDatalabelingV1beta1ExampleComparison
    Example comparisons comparing ground truth output and predictions for a specific input.
    """
    
    ground_truth_example: Optional[GoogleCloudDatalabelingV1beta1Example] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('groundTruthExample') }})
    model_created_examples: Optional[List[GoogleCloudDatalabelingV1beta1Example]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('modelCreatedExamples') }})
    
