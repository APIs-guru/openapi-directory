from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import softwarerecipeartifact
from . import softwarerecipestep
from . import softwarerecipestep

class SoftwareRecipeDesiredStateEnum(str, Enum):
    DESIRED_STATE_UNSPECIFIED = "DESIRED_STATE_UNSPECIFIED"
    INSTALLED = "INSTALLED"
    UPDATED = "UPDATED"
    REMOVED = "REMOVED"


@dataclass_json
@dataclass
class SoftwareRecipe:
    artifacts: Optional[List[softwarerecipeartifact.SoftwareRecipeArtifact]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'artifacts' }})
    desired_state: Optional[SoftwareRecipeDesiredStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'desiredState' }})
    install_steps: Optional[List[softwarerecipestep.SoftwareRecipeStep]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'installSteps' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    update_steps: Optional[List[softwarerecipestep.SoftwareRecipeStep]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateSteps' }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    
