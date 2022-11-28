from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PackageRepository:
    r"""PackageRepository
    A package repository.
    """
    
    apt: Optional[AptRepository] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('apt') }})
    goo: Optional[GooRepository] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('goo') }})
    yum: Optional[YumRepository] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('yum') }})
    zypper: Optional[ZypperRepository] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('zypper') }})
    
