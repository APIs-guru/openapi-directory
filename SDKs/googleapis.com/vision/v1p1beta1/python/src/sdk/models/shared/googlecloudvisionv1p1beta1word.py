from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudVisionV1p1beta1Word:
    r"""GoogleCloudVisionV1p1beta1Word
    A word representation.
    """
    
    bounding_box: Optional[GoogleCloudVisionV1p1beta1BoundingPoly] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('boundingBox') }})
    confidence: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('confidence') }})
    property: Optional[GoogleCloudVisionV1p1beta1TextAnnotationTextProperty] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('property') }})
    symbols: Optional[List[GoogleCloudVisionV1p1beta1Symbol]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('symbols') }})
    
