from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class RepresentativeInfoData:
    divisions: Optional[dict[str, GeographicDivision]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('divisions') }})
    offices: Optional[List[Office]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('offices') }})
    officials: Optional[List[Official]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('officials') }})
    
