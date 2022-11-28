from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class LandlordSettingsModel:
    r"""LandlordSettingsModel
    Landlord Settings
    """
    
    linked_accounts: Optional[List[LandlordDetailsModel]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LinkedAccounts') }})
    
