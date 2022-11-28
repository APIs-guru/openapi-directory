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
class AccountAutomaticImprovements:
    r"""AccountAutomaticImprovements
    The automatic improvements of the account can be used to automatically update items, improve images and shipping.
    """
    
    image_improvements: Optional[AccountImageImprovements] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imageImprovements') }})
    item_updates: Optional[AccountItemUpdates] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('itemUpdates') }})
    shipping_improvements: Optional[AccountShippingImprovements] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shippingImprovements') }})
    

@dataclass_json
@dataclass
class AccountAutomaticImprovementsInput:
    r"""AccountAutomaticImprovementsInput
    The automatic improvements of the account can be used to automatically update items, improve images and shipping.
    """
    
    image_improvements: Optional[AccountImageImprovementsInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imageImprovements') }})
    item_updates: Optional[AccountItemUpdatesInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('itemUpdates') }})
    shipping_improvements: Optional[AccountShippingImprovements] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shippingImprovements') }})
    
