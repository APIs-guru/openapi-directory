from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListFirstAndThirdPartyAudiencesResponse:
    first_and_third_party_audiences: Optional[List[FirstAndThirdPartyAudience]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('firstAndThirdPartyAudiences') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
