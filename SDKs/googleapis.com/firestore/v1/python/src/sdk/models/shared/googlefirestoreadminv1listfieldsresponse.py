from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleFirestoreAdminV1ListFieldsResponse:
    r"""GoogleFirestoreAdminV1ListFieldsResponse
    The response for FirestoreAdmin.ListFields.
    """
    
    fields: Optional[List[GoogleFirestoreAdminV1Field]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fields') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
