from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import effectiveguestpolicysourcedpackagerepository
from . import effectiveguestpolicysourcedpackage
from . import effectiveguestpolicysourcedsoftwarerecipe


@dataclass_json
@dataclass
class EffectiveGuestPolicy:
    package_repositories: Optional[List[effectiveguestpolicysourcedpackagerepository.EffectiveGuestPolicySourcedPackageRepository]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'packageRepositories' }})
    packages: Optional[List[effectiveguestpolicysourcedpackage.EffectiveGuestPolicySourcedPackage]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'packages' }})
    software_recipes: Optional[List[effectiveguestpolicysourcedsoftwarerecipe.EffectiveGuestPolicySourcedSoftwareRecipe]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'softwareRecipes' }})
    
