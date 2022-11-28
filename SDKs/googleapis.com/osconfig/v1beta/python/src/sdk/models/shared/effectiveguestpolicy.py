from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class EffectiveGuestPolicy:
    r"""EffectiveGuestPolicy
    The effective guest policy that applies to a VM instance.
    """
    
    package_repositories: Optional[List[EffectiveGuestPolicySourcedPackageRepository]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('packageRepositories') }})
    packages: Optional[List[EffectiveGuestPolicySourcedPackage]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('packages') }})
    software_recipes: Optional[List[EffectiveGuestPolicySourcedSoftwareRecipe]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('softwareRecipes') }})
    
