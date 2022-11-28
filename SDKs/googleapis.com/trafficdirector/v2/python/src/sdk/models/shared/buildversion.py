from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BuildVersion:
    r"""BuildVersion
    BuildVersion combines SemVer version of extension with free-form build information (i.e. 'alpha', 'private-build') as a set of strings.
    """
    
    metadata: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    version: Optional[SemanticVersion] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    
