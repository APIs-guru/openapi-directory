from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class OsPolicyResourceRepositoryResource:
    r"""OsPolicyResourceRepositoryResource
    A resource that manages a package repository.
    """
    
    apt: Optional[OsPolicyResourceRepositoryResourceAptRepository] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('apt') }})
    goo: Optional[OsPolicyResourceRepositoryResourceGooRepository] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('goo') }})
    yum: Optional[OsPolicyResourceRepositoryResourceYumRepository] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('yum') }})
    zypper: Optional[OsPolicyResourceRepositoryResourceZypperRepository] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('zypper') }})
    
