from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class LiaCountrySettings:
    about: Optional[LiaAboutPageSettings] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('about') }})
    country: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('country') }})
    hosted_local_storefront_active: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hostedLocalStorefrontActive') }})
    inventory: Optional[LiaInventorySettings] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inventory') }})
    on_display_to_order: Optional[LiaOnDisplayToOrderSettings] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('onDisplayToOrder') }})
    pos_data_provider: Optional[LiaPosDataProvider] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('posDataProvider') }})
    store_pickup_active: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('storePickupActive') }})
    
