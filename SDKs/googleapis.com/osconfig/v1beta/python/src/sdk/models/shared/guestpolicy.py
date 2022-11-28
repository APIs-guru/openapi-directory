from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GuestPolicyInput:
    r"""GuestPolicyInput
    An OS Config resource representing a guest configuration policy. These policies represent the desired state for VM instance guest environments including packages to install or remove, package repository configurations, and software to install.
    """
    
    assignment: Optional[Assignment] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assignment') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('etag') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    package_repositories: Optional[List[PackageRepository]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('packageRepositories') }})
    packages: Optional[List[Package]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('packages') }})
    recipes: Optional[List[SoftwareRecipe]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recipes') }})
    

@dataclass_json
@dataclass
class GuestPolicy:
    r"""GuestPolicy
    An OS Config resource representing a guest configuration policy. These policies represent the desired state for VM instance guest environments including packages to install or remove, package repository configurations, and software to install.
    """
    
    assignment: Optional[Assignment] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assignment') }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('etag') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    package_repositories: Optional[List[PackageRepository]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('packageRepositories') }})
    packages: Optional[List[Package]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('packages') }})
    recipes: Optional[List[SoftwareRecipe]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recipes') }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    
