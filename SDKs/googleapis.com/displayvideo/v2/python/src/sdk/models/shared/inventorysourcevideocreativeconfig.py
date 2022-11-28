from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class InventorySourceVideoCreativeConfig:
    r"""InventorySourceVideoCreativeConfig
    The configuration for video creatives.
    """
    
    duration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('duration') }})
    
