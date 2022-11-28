from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class FreeFormServiceItem:
    r"""FreeFormServiceItem
    Represents a free-form service offered by the merchant. These are services that are not exposed as part of our structure service data. The merchant manually enters the names for of such services via a geomerchant surface.
    """
    
    category: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('category') }})
    label: Optional[Label] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    
