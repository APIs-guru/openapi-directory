from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import weblabel
from . import webimage
from . import webpage
from . import webimage
from . import webimage
from . import webentity


@dataclass_json
@dataclass
class WebDetection:
    best_guess_labels: Optional[List[weblabel.WebLabel]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bestGuessLabels' }})
    full_matching_images: Optional[List[webimage.WebImage]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fullMatchingImages' }})
    pages_with_matching_images: Optional[List[webpage.WebPage]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pagesWithMatchingImages' }})
    partial_matching_images: Optional[List[webimage.WebImage]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'partialMatchingImages' }})
    visually_similar_images: Optional[List[webimage.WebImage]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'visuallySimilarImages' }})
    web_entities: Optional[List[webentity.WebEntity]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'webEntities' }})
    
