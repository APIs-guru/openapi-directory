from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudVisionV1p1beta1BatchAnnotateFilesResponse:
    r"""GoogleCloudVisionV1p1beta1BatchAnnotateFilesResponse
    A list of file annotation responses.
    """
    
    responses: Optional[List[GoogleCloudVisionV1p1beta1AnnotateFileResponse]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('responses') }})
    
