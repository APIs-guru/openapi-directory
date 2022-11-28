from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleFirestoreAdminV1beta2ListFieldsResponse:
    r"""GoogleFirestoreAdminV1beta2ListFieldsResponse
    The response for FirestoreAdmin.ListFields.
    """
    
    fields: Optional[List[GoogleFirestoreAdminV1beta2Field]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fields') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
