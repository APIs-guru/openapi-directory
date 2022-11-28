from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class InTotoProvenance:
    builder_config: Optional[BuilderConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('builderConfig') }})
    materials: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('materials') }})
    metadata: Optional[Metadata] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    recipe: Optional[Recipe] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recipe') }})
    
