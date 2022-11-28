from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class SoftwareRecipeDesiredStateEnum(str, Enum):
    DESIRED_STATE_UNSPECIFIED = "DESIRED_STATE_UNSPECIFIED"
    INSTALLED = "INSTALLED"
    UPDATED = "UPDATED"
    REMOVED = "REMOVED"


@dataclass_json
@dataclass
class SoftwareRecipe:
    r"""SoftwareRecipe
    A software recipe is a set of instructions for installing and configuring a piece of software. It consists of a set of artifacts that are downloaded, and a set of steps that install, configure, and/or update the software. Recipes support installing and updating software from artifacts in the following formats: Zip archive, Tar archive, Windows MSI, Debian package, and RPM package. Additionally, recipes support executing a script (either defined in a file or directly in this api) in bash, sh, cmd, and powershell. Updating a software recipe If a recipe is assigned to an instance and there is a recipe with the same name but a lower version already installed and the assigned state of the recipe is `UPDATED`, then the recipe is updated to the new version. Script Working Directories Each script or execution step is run in its own temporary directory which is deleted after completing the step.
    """
    
    artifacts: Optional[List[SoftwareRecipeArtifact]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('artifacts') }})
    desired_state: Optional[SoftwareRecipeDesiredStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('desiredState') }})
    install_steps: Optional[List[SoftwareRecipeStep]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('installSteps') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    update_steps: Optional[List[SoftwareRecipeStep]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateSteps') }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    
