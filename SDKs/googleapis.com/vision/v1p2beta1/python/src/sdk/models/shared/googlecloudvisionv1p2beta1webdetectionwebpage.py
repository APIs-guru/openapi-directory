from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudVisionV1p2beta1WebDetectionWebPage:
    r"""GoogleCloudVisionV1p2beta1WebDetectionWebPage
    Metadata for web pages.
    """
    
    full_matching_images: Optional[List[GoogleCloudVisionV1p2beta1WebDetectionWebImage]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fullMatchingImages') }})
    page_title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pageTitle') }})
    partial_matching_images: Optional[List[GoogleCloudVisionV1p2beta1WebDetectionWebImage]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('partialMatchingImages') }})
    score: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('score') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    
