from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudVisionV1p2beta1BatchAnnotateImagesResponse:
    r"""GoogleCloudVisionV1p2beta1BatchAnnotateImagesResponse
    Response to a batch image annotation request.
    """
    
    responses: Optional[List[GoogleCloudVisionV1p2beta1AnnotateImageResponse]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('responses') }})
    
