from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class EffectiveGuestPolicySourcedSoftwareRecipe:
    r"""EffectiveGuestPolicySourcedSoftwareRecipe
    A guest policy recipe including its source.
    """
    
    software_recipe: Optional[SoftwareRecipe] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('softwareRecipe') }})
    source: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    
