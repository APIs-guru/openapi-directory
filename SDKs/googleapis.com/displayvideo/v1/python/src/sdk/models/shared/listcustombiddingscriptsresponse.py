from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListCustomBiddingScriptsResponse:
    custom_bidding_scripts: Optional[List[CustomBiddingScript]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customBiddingScripts') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
