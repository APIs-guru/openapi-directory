from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3ListSessionEntityTypesResponse:
    r"""GoogleCloudDialogflowCxV3ListSessionEntityTypesResponse
    The response message for SessionEntityTypes.ListSessionEntityTypes.
    """
    
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    session_entity_types: Optional[List[GoogleCloudDialogflowCxV3SessionEntityType]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sessionEntityTypes') }})
    
