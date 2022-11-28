from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudVisionV1p2beta1AnnotateFileResponse:
    r"""GoogleCloudVisionV1p2beta1AnnotateFileResponse
    Response to a single file annotation request. A file may contain one or more images, which individually have their own responses.
    """
    
    error: Optional[Status] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    input_config: Optional[GoogleCloudVisionV1p2beta1InputConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inputConfig') }})
    responses: Optional[List[GoogleCloudVisionV1p2beta1AnnotateImageResponse]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('responses') }})
    total_pages: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalPages') }})
    
