from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import aptrepository
from . import goorepository
from . import yumrepository
from . import zypperrepository


@dataclass_json
@dataclass
class PackageRepository:
    apt: Optional[aptrepository.AptRepository] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'apt' }})
    goo: Optional[goorepository.GooRepository] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'goo' }})
    yum: Optional[yumrepository.YumRepository] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'yum' }})
    zypper: Optional[zypperrepository.ZypperRepository] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'zypper' }})
    
