from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListEntityTypesResponse:
    r"""ListEntityTypesResponse
    Response message for EntityService.ListEntityTypes
    """
    
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    types: Optional[List[EntityType]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('types') }})
    unsupported_type_names: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unsupportedTypeNames') }})
    
