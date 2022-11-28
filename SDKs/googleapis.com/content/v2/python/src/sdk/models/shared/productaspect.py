from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ProductAspect:
    aspect_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('aspectName') }})
    destination_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destinationName') }})
    intention: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('intention') }})
    
