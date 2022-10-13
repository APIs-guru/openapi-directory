from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import packagerepository


@dataclass_json
@dataclass
class EffectiveGuestPolicySourcedPackageRepository:
    package_repository: Optional[packagerepository.PackageRepository] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'packageRepository' }})
    source: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source' }})
    
