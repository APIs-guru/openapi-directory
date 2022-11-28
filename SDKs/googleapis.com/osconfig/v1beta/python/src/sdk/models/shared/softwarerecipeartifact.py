from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SoftwareRecipeArtifact:
    r"""SoftwareRecipeArtifact
    Specifies a resource to be used in the recipe.
    """
    
    allow_insecure: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowInsecure') }})
    gcs: Optional[SoftwareRecipeArtifactGcs] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gcs') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    remote: Optional[SoftwareRecipeArtifactRemote] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('remote') }})
    
