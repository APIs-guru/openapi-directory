from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudIdentitytoolkitAdminV2ListDefaultSupportedIdpsResponse:
    r"""GoogleCloudIdentitytoolkitAdminV2ListDefaultSupportedIdpsResponse
    Response for ListDefaultSupportedIdps
    """
    
    default_supported_idps: Optional[List[GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdp]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultSupportedIdps') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
