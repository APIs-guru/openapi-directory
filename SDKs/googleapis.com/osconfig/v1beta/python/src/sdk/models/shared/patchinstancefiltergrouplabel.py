from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PatchInstanceFilterGroupLabel:
    r"""PatchInstanceFilterGroupLabel
    Represents a group of VMs that can be identified as having all these labels, for example \"env=prod and app=web\".
    """
    
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    
