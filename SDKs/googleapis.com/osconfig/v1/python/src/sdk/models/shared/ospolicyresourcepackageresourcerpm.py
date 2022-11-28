from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class OsPolicyResourcePackageResourceRpm:
    r"""OsPolicyResourcePackageResourceRpm
    An RPM package file. RPM packages only support INSTALLED state.
    """
    
    pull_deps: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pullDeps') }})
    source: Optional[OsPolicyResourceFile] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    
