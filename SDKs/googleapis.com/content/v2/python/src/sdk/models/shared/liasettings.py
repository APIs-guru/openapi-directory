from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class LiaSettings:
    r"""LiaSettings
    Local Inventory ads (LIA) settings. All methods except listposdataproviders require the admin role.
    """
    
    account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountId') }})
    country_settings: Optional[List[LiaCountrySettings]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('countrySettings') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    
