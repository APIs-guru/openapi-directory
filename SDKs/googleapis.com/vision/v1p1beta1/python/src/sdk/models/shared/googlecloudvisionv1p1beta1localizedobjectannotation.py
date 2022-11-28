from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudVisionV1p1beta1LocalizedObjectAnnotation:
    r"""GoogleCloudVisionV1p1beta1LocalizedObjectAnnotation
    Set of detected objects with bounding boxes.
    """
    
    bounding_poly: Optional[GoogleCloudVisionV1p1beta1BoundingPoly] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('boundingPoly') }})
    language_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('languageCode') }})
    mid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mid') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    score: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('score') }})
    
