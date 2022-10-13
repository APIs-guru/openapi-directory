from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import liaaboutpagesettings
from . import liainventorysettings
from . import liaondisplaytoordersettings
from . import liaposdataprovider


@dataclass_json
@dataclass
class LiaCountrySettings:
    about: Optional[liaaboutpagesettings.LiaAboutPageSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'about' }})
    country: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'country' }})
    hosted_local_storefront_active: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hostedLocalStorefrontActive' }})
    inventory: Optional[liainventorysettings.LiaInventorySettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inventory' }})
    on_display_to_order: Optional[liaondisplaytoordersettings.LiaOnDisplayToOrderSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'onDisplayToOrder' }})
    pos_data_provider: Optional[liaposdataprovider.LiaPosDataProvider] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'posDataProvider' }})
    store_pickup_active: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'storePickupActive' }})
    
