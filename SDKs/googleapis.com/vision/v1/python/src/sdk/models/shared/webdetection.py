from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class WebDetection:
    r"""WebDetection
    Relevant information for the image from the Internet.
    """
    
    best_guess_labels: Optional[List[WebLabel]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bestGuessLabels') }})
    full_matching_images: Optional[List[WebImage]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fullMatchingImages') }})
    pages_with_matching_images: Optional[List[WebPage]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pagesWithMatchingImages') }})
    partial_matching_images: Optional[List[WebImage]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('partialMatchingImages') }})
    visually_similar_images: Optional[List[WebImage]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('visuallySimilarImages') }})
    web_entities: Optional[List[WebEntity]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('webEntities') }})
    
