from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CompositeTypesListResponse:
    r"""CompositeTypesListResponse
    A response that returns all Composite Types supported by Deployment Manager
    """
    
    composite_types: Optional[List[CompositeType]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('compositeTypes') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
