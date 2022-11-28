from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GcePersistentDiskCsiDriverConfig:
    r"""GcePersistentDiskCsiDriverConfig
    Configuration for the Compute Engine PD CSI driver.
    """
    
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    
