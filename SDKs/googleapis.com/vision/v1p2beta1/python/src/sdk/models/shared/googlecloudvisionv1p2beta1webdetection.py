from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudVisionV1p2beta1WebDetection:
    r"""GoogleCloudVisionV1p2beta1WebDetection
    Relevant information for the image from the Internet.
    """
    
    best_guess_labels: Optional[List[GoogleCloudVisionV1p2beta1WebDetectionWebLabel]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bestGuessLabels') }})
    full_matching_images: Optional[List[GoogleCloudVisionV1p2beta1WebDetectionWebImage]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fullMatchingImages') }})
    pages_with_matching_images: Optional[List[GoogleCloudVisionV1p2beta1WebDetectionWebPage]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pagesWithMatchingImages') }})
    partial_matching_images: Optional[List[GoogleCloudVisionV1p2beta1WebDetectionWebImage]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('partialMatchingImages') }})
    visually_similar_images: Optional[List[GoogleCloudVisionV1p2beta1WebDetectionWebImage]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('visuallySimilarImages') }})
    web_entities: Optional[List[GoogleCloudVisionV1p2beta1WebDetectionWebEntity]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('webEntities') }})
    
