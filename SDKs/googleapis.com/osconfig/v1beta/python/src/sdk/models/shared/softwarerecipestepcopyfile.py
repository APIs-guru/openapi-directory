from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class SoftwareRecipeStepCopyFile:
    r"""SoftwareRecipeStepCopyFile
    Copies the artifact to the specified path on the instance.
    """
    
    artifact_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('artifactId') }})
    destination: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destination') }})
    overwrite: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('overwrite') }})
    permissions: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('permissions') }})
    
