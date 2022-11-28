from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleFirebaseAppcheckV1betaListDebugTokensResponse:
    r"""GoogleFirebaseAppcheckV1betaListDebugTokensResponse
    Response message for the ListDebugTokens method.
    """
    
    debug_tokens: Optional[List[GoogleFirebaseAppcheckV1betaDebugToken]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('debugTokens') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
