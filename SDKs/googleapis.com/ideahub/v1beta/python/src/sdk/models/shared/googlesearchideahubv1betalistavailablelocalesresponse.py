from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleSearchIdeahubV1betaListAvailableLocalesResponse:
    r"""GoogleSearchIdeahubV1betaListAvailableLocalesResponse
    Response for whether ideas are available for a given web property on a platform, for the currently logged-in user.
    """
    
    available_locales: Optional[List[GoogleSearchIdeahubV1betaAvailableLocale]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('availableLocales') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
