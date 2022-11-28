from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DownloadAccesses:
    download_access_list: Optional[List[DownloadAccessRestriction]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('downloadAccessList') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    
