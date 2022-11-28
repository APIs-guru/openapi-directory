from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudContactcenterinsightsV1ListPhraseMatchersResponse:
    r"""GoogleCloudContactcenterinsightsV1ListPhraseMatchersResponse
    The response of listing phrase matchers.
    """
    
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    phrase_matchers: Optional[List[GoogleCloudContactcenterinsightsV1PhraseMatcher]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phraseMatchers') }})
    
