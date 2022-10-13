from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import priceamount
from . import priceamount
from . import priceamount
from . import priceamount
from . import priceamount
from . import timeperiod
from . import timeperiod

class PromotionCouponValueTypeEnum(str, Enum):
    COUPON_VALUE_TYPE_UNSPECIFIED = "COUPON_VALUE_TYPE_UNSPECIFIED"
    MONEY_OFF = "MONEY_OFF"
    PERCENT_OFF = "PERCENT_OFF"
    BUY_M_GET_N_MONEY_OFF = "BUY_M_GET_N_MONEY_OFF"
    BUY_M_GET_N_PERCENT_OFF = "BUY_M_GET_N_PERCENT_OFF"
    BUY_M_GET_MONEY_OFF = "BUY_M_GET_MONEY_OFF"
    BUY_M_GET_PERCENT_OFF = "BUY_M_GET_PERCENT_OFF"
    FREE_GIFT = "FREE_GIFT"
    FREE_GIFT_WITH_VALUE = "FREE_GIFT_WITH_VALUE"
    FREE_GIFT_WITH_ITEM_ID = "FREE_GIFT_WITH_ITEM_ID"
    FREE_SHIPPING_STANDARD = "FREE_SHIPPING_STANDARD"
    FREE_SHIPPING_OVERNIGHT = "FREE_SHIPPING_OVERNIGHT"
    FREE_SHIPPING_TWO_DAY = "FREE_SHIPPING_TWO_DAY"

class PromotionOfferTypeEnum(str, Enum):
    OFFER_TYPE_UNSPECIFIED = "OFFER_TYPE_UNSPECIFIED"
    NO_CODE = "NO_CODE"
    GENERIC_CODE = "GENERIC_CODE"

class PromotionProductApplicabilityEnum(str, Enum):
    PRODUCT_APPLICABILITY_UNSPECIFIED = "PRODUCT_APPLICABILITY_UNSPECIFIED"
    ALL_PRODUCTS = "ALL_PRODUCTS"
    SPECIFIC_PRODUCTS = "SPECIFIC_PRODUCTS"

class PromotionRedemptionChannelEnum(str, Enum):
    REDEMPTION_CHANNEL_UNSPECIFIED = "REDEMPTION_CHANNEL_UNSPECIFIED"
    IN_STORE = "IN_STORE"
    ONLINE = "ONLINE"


@dataclass_json
@dataclass
class Promotion:
    brand: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'brand' }})
    brand_exclusion: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'brandExclusion' }})
    content_language: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contentLanguage' }})
    coupon_value_type: Optional[PromotionCouponValueTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'couponValueType' }})
    free_gift_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'freeGiftDescription' }})
    free_gift_item_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'freeGiftItemId' }})
    free_gift_value: Optional[priceamount.PriceAmount] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'freeGiftValue' }})
    generic_redemption_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'genericRedemptionCode' }})
    get_this_quantity_discounted: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'getThisQuantityDiscounted' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    item_group_id: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'itemGroupId' }})
    item_group_id_exclusion: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'itemGroupIdExclusion' }})
    item_id: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'itemId' }})
    item_id_exclusion: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'itemIdExclusion' }})
    limit_quantity: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'limitQuantity' }})
    limit_value: Optional[priceamount.PriceAmount] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'limitValue' }})
    long_title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'longTitle' }})
    minimum_purchase_amount: Optional[priceamount.PriceAmount] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'minimumPurchaseAmount' }})
    minimum_purchase_quantity: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'minimumPurchaseQuantity' }})
    money_budget: Optional[priceamount.PriceAmount] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'moneyBudget' }})
    money_off_amount: Optional[priceamount.PriceAmount] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'moneyOffAmount' }})
    offer_type: Optional[PromotionOfferTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'offerType' }})
    order_limit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'orderLimit' }})
    percent_off: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'percentOff' }})
    product_applicability: Optional[PromotionProductApplicabilityEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'productApplicability' }})
    product_type: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'productType' }})
    product_type_exclusion: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'productTypeExclusion' }})
    promotion_destination_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'promotionDestinationIds' }})
    promotion_display_dates: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'promotionDisplayDates' }})
    promotion_display_time_period: Optional[timeperiod.TimePeriod] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'promotionDisplayTimePeriod' }})
    promotion_effective_dates: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'promotionEffectiveDates' }})
    promotion_effective_time_period: Optional[timeperiod.TimePeriod] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'promotionEffectiveTimePeriod' }})
    promotion_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'promotionId' }})
    redemption_channel: Optional[List[PromotionRedemptionChannelEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'redemptionChannel' }})
    shipping_service_names: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shippingServiceNames' }})
    target_country: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targetCountry' }})
    
