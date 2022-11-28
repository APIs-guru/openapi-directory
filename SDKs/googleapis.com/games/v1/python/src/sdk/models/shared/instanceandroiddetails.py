from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class InstanceAndroidDetails:
    r"""InstanceAndroidDetails
    The Android instance details resource.
    """
    
    enable_piracy_check: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enablePiracyCheck') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    package_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('packageName') }})
    preferred: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('preferred') }})
    
