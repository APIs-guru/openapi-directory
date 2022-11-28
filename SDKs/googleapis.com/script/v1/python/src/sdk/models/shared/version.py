from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Version:
    r"""Version
    A resource representing a script project version. A version is a \"snapshot\" of a script project and is similar to a read-only branched release. When creating deployments, the version to use must be specified.
    """
    
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    script_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scriptId') }})
    version_number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('versionNumber') }})
    
