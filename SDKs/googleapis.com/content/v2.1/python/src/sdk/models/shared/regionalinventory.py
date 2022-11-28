from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class RegionalInventory:
    r"""RegionalInventory
    Regional inventory resource. contains the regional name and all attributes which are overridden for the specified region.
    """
    
    availability: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('availability') }})
    custom_attributes: Optional[List[CustomAttribute]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customAttributes') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    price: Optional[Price] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('price') }})
    region_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('regionId') }})
    sale_price: Optional[Price] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('salePrice') }})
    sale_price_effective_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('salePriceEffectiveDate') }})
    
