from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudVisionV1p1beta1Page:
    r"""GoogleCloudVisionV1p1beta1Page
    Detected page from OCR.
    """
    
    blocks: Optional[List[GoogleCloudVisionV1p1beta1Block]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('blocks') }})
    confidence: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('confidence') }})
    height: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('height') }})
    property: Optional[GoogleCloudVisionV1p1beta1TextAnnotationTextProperty] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('property') }})
    width: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('width') }})
    
