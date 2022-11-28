from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AccountItemUpdatesInput:
    r"""AccountItemUpdatesInput
    Turning on [item updates](https://support.google.com/merchants/answer/3246284) allows Google to automatically update items for you. When item updates are on, Google uses the structured data markup on the website and advanced data extractors to update the price and availability of the items. When the item updates are off, items with mismatched data aren't shown.
    """
    
    account_item_updates_settings: Optional[AccountItemUpdatesSettings] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountItemUpdatesSettings') }})
    

@dataclass_json
@dataclass
class AccountItemUpdates:
    r"""AccountItemUpdates
    Turning on [item updates](https://support.google.com/merchants/answer/3246284) allows Google to automatically update items for you. When item updates are on, Google uses the structured data markup on the website and advanced data extractors to update the price and availability of the items. When the item updates are off, items with mismatched data aren't shown.
    """
    
    account_item_updates_settings: Optional[AccountItemUpdatesSettings] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountItemUpdatesSettings') }})
    effective_allow_availability_updates: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('effectiveAllowAvailabilityUpdates') }})
    effective_allow_condition_updates: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('effectiveAllowConditionUpdates') }})
    effective_allow_price_updates: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('effectiveAllowPriceUpdates') }})
    effective_allow_strict_availability_updates: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('effectiveAllowStrictAvailabilityUpdates') }})
    
