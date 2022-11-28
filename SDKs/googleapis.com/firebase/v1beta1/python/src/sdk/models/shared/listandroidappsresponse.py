from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListAndroidAppsResponse:
    apps: Optional[List[AndroidApp]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('apps') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
