from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class InventorySourceAccessors:
    r"""InventorySourceAccessors
    The partner or advertisers with access to the inventory source.
    """
    
    advertisers: Optional[InventorySourceAccessorsAdvertiserAccessors] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('advertisers') }})
    partner: Optional[InventorySourceAccessorsPartnerAccessor] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('partner') }})
    
