from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import assignment
from . import packagerepository
from . import package
from . import softwarerecipe


@dataclass_json
@dataclass
class GuestPolicy:
    assignment: Optional[assignment.Assignment] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assignment' }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'etag' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    package_repositories: Optional[List[packagerepository.PackageRepository]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'packageRepositories' }})
    packages: Optional[List[package.Package]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'packages' }})
    recipes: Optional[List[softwarerecipe.SoftwareRecipe]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recipes' }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateTime' }})
    
