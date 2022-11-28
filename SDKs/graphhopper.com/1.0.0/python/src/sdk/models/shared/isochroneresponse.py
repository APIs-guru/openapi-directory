from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class IsochroneResponse:
    copyrights: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('copyrights') }})
    polygons: Optional[List[IsochroneResponsePolygon]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('polygons') }})
    
