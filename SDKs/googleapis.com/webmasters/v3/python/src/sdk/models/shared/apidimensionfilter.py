from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class APIDimensionFilter:
    dimension: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dimension') }})
    expression: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expression') }})
    operator: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('operator') }})
    
