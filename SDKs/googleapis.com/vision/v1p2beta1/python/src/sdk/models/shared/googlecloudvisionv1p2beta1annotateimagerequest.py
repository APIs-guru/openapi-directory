from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudVisionV1p2beta1AnnotateImageRequest:
    r"""GoogleCloudVisionV1p2beta1AnnotateImageRequest
    Request for performing Google Cloud Vision API tasks over a user-provided image, with user-requested features, and with context information.
    """
    
    features: Optional[List[GoogleCloudVisionV1p2beta1Feature]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('features') }})
    image: Optional[GoogleCloudVisionV1p2beta1Image] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('image') }})
    image_context: Optional[GoogleCloudVisionV1p2beta1ImageContext] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imageContext') }})
    
