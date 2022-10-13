from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json

class LocationAssociationCategoryEnum(str, Enum):
    CATEGORY_UNSPECIFIED = "CATEGORY_UNSPECIFIED"
    COVER = "COVER"
    PROFILE = "PROFILE"
    LOGO = "LOGO"
    EXTERIOR = "EXTERIOR"
    INTERIOR = "INTERIOR"
    PRODUCT = "PRODUCT"
    AT_WORK = "AT_WORK"
    FOOD_AND_DRINK = "FOOD_AND_DRINK"
    MENU = "MENU"
    COMMON_AREA = "COMMON_AREA"
    ROOMS = "ROOMS"
    TEAMS = "TEAMS"
    ADDITIONAL = "ADDITIONAL"


@dataclass_json
@dataclass
class LocationAssociation:
    category: Optional[LocationAssociationCategoryEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'category' }})
    price_list_item_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'priceListItemId' }})
    
