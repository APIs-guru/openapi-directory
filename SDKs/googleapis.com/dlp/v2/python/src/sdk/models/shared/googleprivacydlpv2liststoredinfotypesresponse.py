from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GooglePrivacyDlpV2ListStoredInfoTypesResponse:
    r"""GooglePrivacyDlpV2ListStoredInfoTypesResponse
    Response message for ListStoredInfoTypes.
    """
    
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    stored_info_types: Optional[List[GooglePrivacyDlpV2StoredInfoType]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('storedInfoTypes') }})
    
