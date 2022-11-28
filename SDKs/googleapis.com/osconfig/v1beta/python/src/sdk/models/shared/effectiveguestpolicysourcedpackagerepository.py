from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class EffectiveGuestPolicySourcedPackageRepository:
    r"""EffectiveGuestPolicySourcedPackageRepository
    A guest policy package repository including its source.
    """
    
    package_repository: Optional[PackageRepository] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('packageRepository') }})
    source: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    
