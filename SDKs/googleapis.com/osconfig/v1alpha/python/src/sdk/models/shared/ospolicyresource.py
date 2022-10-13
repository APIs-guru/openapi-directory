from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import ospolicyresourceexecresource
from . import ospolicyresourcefileresource
from . import ospolicyresourcepackageresource
from . import ospolicyresourcerepositoryresource


@dataclass_json
@dataclass
class OsPolicyResource:
    exec: Optional[ospolicyresourceexecresource.OsPolicyResourceExecResource] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'exec' }})
    file: Optional[ospolicyresourcefileresource.OsPolicyResourceFileResource] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'file' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    pkg: Optional[ospolicyresourcepackageresource.OsPolicyResourcePackageResource] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pkg' }})
    repository: Optional[ospolicyresourcerepositoryresource.OsPolicyResourceRepositoryResource] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repository' }})
    
