from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class SoftwareVersionOut:
    r"""SoftwareVersionOut
    The software version.
    """
    
    software_name_and_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('softwareNameAndVersion') }})
    software_version: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('softwareVersion') }})
    
