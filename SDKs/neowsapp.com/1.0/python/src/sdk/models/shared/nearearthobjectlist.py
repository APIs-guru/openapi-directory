from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class NearEarthObjectList:
    element_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('element_count') }})
    links: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    near_earth_objects: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('near_earth_objects') }})
    
