from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BatchAnnotateImagesResponse:
    r"""BatchAnnotateImagesResponse
    Response to a batch image annotation request.
    """
    
    responses: Optional[List[AnnotateImageResponse]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('responses') }})
    
