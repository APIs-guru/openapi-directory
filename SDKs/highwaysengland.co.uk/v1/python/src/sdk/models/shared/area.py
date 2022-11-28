from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Area:
    description: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    x_latitude: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('XLatitude') }})
    x_longitude: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('XLongitude') }})
    y_latitude: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('YLatitude') }})
    y_longitude: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('YLongitude') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Id') }})
    
