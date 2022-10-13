from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import date
from . import productviewitemissue

class ProductViewAggregatedDestinationStatusEnum(str, Enum):
    AGGREGATED_STATUS_UNSPECIFIED = "AGGREGATED_STATUS_UNSPECIFIED"
    NOT_ELIGIBLE_OR_DISAPPROVED = "NOT_ELIGIBLE_OR_DISAPPROVED"
    PENDING = "PENDING"
    ELIGIBLE_LIMITED = "ELIGIBLE_LIMITED"
    ELIGIBLE = "ELIGIBLE"

class ProductViewChannelEnum(str, Enum):
    CHANNEL_UNSPECIFIED = "CHANNEL_UNSPECIFIED"
    LOCAL = "LOCAL"
    ONLINE = "ONLINE"


@dataclass_json
@dataclass
class ProductView:
    aggregated_destination_status: Optional[ProductViewAggregatedDestinationStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'aggregatedDestinationStatus' }})
    availability: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'availability' }})
    brand: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'brand' }})
    channel: Optional[ProductViewChannelEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'channel' }})
    condition: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'condition' }})
    creation_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creationTime' }})
    currency_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currencyCode' }})
    expiration_date: Optional[date.Date] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expirationDate' }})
    gtin: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gtin' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    item_group_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'itemGroupId' }})
    item_issues: Optional[List[productviewitemissue.ProductViewItemIssue]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'itemIssues' }})
    language_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'languageCode' }})
    offer_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'offerId' }})
    price_micros: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'priceMicros' }})
    shipping_label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shippingLabel' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    
