from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class InstanceWebDetails:
    r"""InstanceWebDetails
    The Web details resource.
    """
    
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    launch_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('launchUrl') }})
    preferred: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('preferred') }})
    
