from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class OsPolicyResource:
    r"""OsPolicyResource
    An OS policy resource is used to define the desired state configuration and provides a specific functionality like installing/removing packages, executing a script etc. The system ensures that resources are always in their desired state by taking necessary actions if they have drifted from their desired state.
    """
    
    exec: Optional[OsPolicyResourceExecResource] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exec') }})
    file: Optional[OsPolicyResourceFileResource] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('file') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    pkg: Optional[OsPolicyResourcePackageResource] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pkg') }})
    repository: Optional[OsPolicyResourceRepositoryResource] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('repository') }})
    
