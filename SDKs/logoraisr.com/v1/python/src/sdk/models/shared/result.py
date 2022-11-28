from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Result:
    colors: Optional[List[Color]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('colors') }})
    height: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('height') }})
    number_of_pixel_in_image: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('number_of_pixel_in_image') }})
    width: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('width') }})
    
