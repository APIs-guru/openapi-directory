from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class SkippedDetail:
    r"""SkippedDetail
    Details for an outcome with a SKIPPED outcome summary.
    """
    
    incompatible_app_version: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('incompatibleAppVersion') }})
    incompatible_architecture: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('incompatibleArchitecture') }})
    incompatible_device: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('incompatibleDevice') }})
    
