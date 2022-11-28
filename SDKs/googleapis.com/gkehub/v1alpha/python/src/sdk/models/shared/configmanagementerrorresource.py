from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ConfigManagementErrorResource:
    r"""ConfigManagementErrorResource
    Model for a config file in the git repo with an associated Sync error
    """
    
    resource_gvk: Optional[ConfigManagementGroupVersionKind] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceGvk') }})
    resource_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceName') }})
    resource_namespace: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceNamespace') }})
    source_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourcePath') }})
    
