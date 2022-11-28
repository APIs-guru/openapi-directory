from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ConfidentialNodes:
    r"""ConfidentialNodes
    ConfidentialNodes is configuration for the confidential nodes feature, which makes nodes run on confidential VMs.
    """
    
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    
