from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Recipe:
    r"""Recipe
    Steps taken to build the artifact. For a TaskRun, typically each container corresponds to one step in the recipe.
    """
    
    arguments: Optional[List[dict[str, Any]]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('arguments') }})
    defined_in_material: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('definedInMaterial') }})
    entry_point: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entryPoint') }})
    environment: Optional[List[dict[str, Any]]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('environment') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
