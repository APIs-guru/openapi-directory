from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ContentCategoriesListResponse:
    r"""ContentCategoriesListResponse
    Content Category List Response
    """
    
    content_categories: Optional[List[ContentCategory]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contentCategories') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
