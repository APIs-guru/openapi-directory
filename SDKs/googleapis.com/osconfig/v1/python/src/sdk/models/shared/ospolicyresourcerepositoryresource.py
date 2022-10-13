from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import ospolicyresourcerepositoryresourceaptrepository
from . import ospolicyresourcerepositoryresourcegoorepository
from . import ospolicyresourcerepositoryresourceyumrepository
from . import ospolicyresourcerepositoryresourcezypperrepository


@dataclass_json
@dataclass
class OsPolicyResourceRepositoryResource:
    apt: Optional[ospolicyresourcerepositoryresourceaptrepository.OsPolicyResourceRepositoryResourceAptRepository] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'apt' }})
    goo: Optional[ospolicyresourcerepositoryresourcegoorepository.OsPolicyResourceRepositoryResourceGooRepository] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'goo' }})
    yum: Optional[ospolicyresourcerepositoryresourceyumrepository.OsPolicyResourceRepositoryResourceYumRepository] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'yum' }})
    zypper: Optional[ospolicyresourcerepositoryresourcezypperrepository.OsPolicyResourceRepositoryResourceZypperRepository] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'zypper' }})
    
