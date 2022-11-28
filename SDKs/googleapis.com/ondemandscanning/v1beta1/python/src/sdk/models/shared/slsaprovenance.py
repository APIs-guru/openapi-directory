from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SlsaProvenance:
    builder: Optional[SlsaBuilder] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('builder') }})
    materials: Optional[List[Material]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('materials') }})
    metadata: Optional[SlsaMetadata] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    recipe: Optional[SlsaRecipe] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recipe') }})
    
