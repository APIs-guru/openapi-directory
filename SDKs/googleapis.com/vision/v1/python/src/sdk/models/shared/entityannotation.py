from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class EntityAnnotation:
    r"""EntityAnnotation
    Set of detected entity features.
    """
    
    bounding_poly: Optional[BoundingPoly] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('boundingPoly') }})
    confidence: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('confidence') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    locale: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('locale') }})
    locations: Optional[List[LocationInfo]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('locations') }})
    mid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mid') }})
    properties: Optional[List[Property]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('properties') }})
    score: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('score') }})
    topicality: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('topicality') }})
    
