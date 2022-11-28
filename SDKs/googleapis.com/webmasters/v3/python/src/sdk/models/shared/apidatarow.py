from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class APIDataRow:
    clicks: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clicks') }})
    ctr: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ctr') }})
    impressions: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('impressions') }})
    keys: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('keys') }})
    position: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('position') }})
    
