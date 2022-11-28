from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ShippingSettings:
    r"""ShippingSettings
    The merchant account's shipping settings. All methods except getsupportedcarriers and getsupportedholidays require the admin role.
    """
    
    account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountId') }})
    postal_code_groups: Optional[List[PostalCodeGroup]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('postalCodeGroups') }})
    services: Optional[List[Service]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('services') }})
    warehouses: Optional[List[Warehouse]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('warehouses') }})
    
