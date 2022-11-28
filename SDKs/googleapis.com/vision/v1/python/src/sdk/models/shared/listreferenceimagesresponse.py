from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListReferenceImagesResponse:
    r"""ListReferenceImagesResponse
    Response message for the `ListReferenceImages` method.
    """
    
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pageSize') }})
    reference_images: Optional[List[ReferenceImage]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('referenceImages') }})
    
