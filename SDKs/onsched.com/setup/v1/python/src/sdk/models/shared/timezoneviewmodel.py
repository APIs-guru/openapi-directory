from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TimezoneViewModel:
    regions: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('regions') }})
    timezones: Optional[List[TimezonesViewModel]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timezones') }})
    
