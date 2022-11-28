from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

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

class PromotionStoreApplicabilityEnum(str, Enum):
    STORE_APPLICABILITY_UNSPECIFIED = "STORE_APPLICABILITY_UNSPECIFIED"
    ALL_STORES = "ALL_STORES"
    SPECIFIC_STORES = "SPECIFIC_STORES"


@dataclass_json
@dataclass
class Promotion:
    r"""Promotion
    Represents a promotion. See the following articles for more details. * [Promotions feed specification](https://support.google.com/merchants/answer/2906014) * [Local promotions feed specification](https://support.google.com/merchants/answer/10146130) * [Promotions on Buy on Google product data specification](https://support.google.com/merchants/answer/9173673)
    """
    
    brand: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('brand') }})
    brand_exclusion: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('brandExclusion') }})
    content_language: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contentLanguage') }})
    coupon_value_type: Optional[PromotionCouponValueTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('couponValueType') }})
    free_gift_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('freeGiftDescription') }})
    free_gift_item_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('freeGiftItemId') }})
    free_gift_value: Optional[PriceAmount] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('freeGiftValue') }})
    generic_redemption_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('genericRedemptionCode') }})
    get_this_quantity_discounted: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('getThisQuantityDiscounted') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    item_group_id: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('itemGroupId') }})
    item_group_id_exclusion: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('itemGroupIdExclusion') }})
    item_id: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('itemId') }})
    item_id_exclusion: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('itemIdExclusion') }})
    limit_quantity: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('limitQuantity') }})
    limit_value: Optional[PriceAmount] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('limitValue') }})
    long_title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('longTitle') }})
    minimum_purchase_amount: Optional[PriceAmount] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minimumPurchaseAmount') }})
    minimum_purchase_quantity: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minimumPurchaseQuantity') }})
    money_budget: Optional[PriceAmount] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('moneyBudget') }})
    money_off_amount: Optional[PriceAmount] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('moneyOffAmount') }})
    offer_type: Optional[PromotionOfferTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('offerType') }})
    order_limit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('orderLimit') }})
    percent_off: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('percentOff') }})
    product_applicability: Optional[PromotionProductApplicabilityEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('productApplicability') }})
    product_type: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('productType') }})
    product_type_exclusion: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('productTypeExclusion') }})
    promotion_destination_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('promotionDestinationIds') }})
    promotion_display_dates: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('promotionDisplayDates') }})
    promotion_display_time_period: Optional[TimePeriod] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('promotionDisplayTimePeriod') }})
    promotion_effective_dates: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('promotionEffectiveDates') }})
    promotion_effective_time_period: Optional[TimePeriod] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('promotionEffectiveTimePeriod') }})
    promotion_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('promotionId') }})
    promotion_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('promotionUrl') }})
    redemption_channel: Optional[List[PromotionRedemptionChannelEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('redemptionChannel') }})
    shipping_service_names: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shippingServiceNames') }})
    store_applicability: Optional[PromotionStoreApplicabilityEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('storeApplicability') }})
    store_code: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('storeCode') }})
    store_code_exclusion: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('storeCodeExclusion') }})
    target_country: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetCountry') }})
    

@dataclass_json
@dataclass
class PromotionInput:
    r"""PromotionInput
    Represents a promotion. See the following articles for more details. * [Promotions feed specification](https://support.google.com/merchants/answer/2906014) * [Local promotions feed specification](https://support.google.com/merchants/answer/10146130) * [Promotions on Buy on Google product data specification](https://support.google.com/merchants/answer/9173673)
    """
    
    brand: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('brand') }})
    brand_exclusion: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('brandExclusion') }})
    content_language: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contentLanguage') }})
    coupon_value_type: Optional[PromotionCouponValueTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('couponValueType') }})
    free_gift_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('freeGiftDescription') }})
    free_gift_item_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('freeGiftItemId') }})
    free_gift_value: Optional[PriceAmount] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('freeGiftValue') }})
    generic_redemption_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('genericRedemptionCode') }})
    get_this_quantity_discounted: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('getThisQuantityDiscounted') }})
    item_group_id: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('itemGroupId') }})
    item_group_id_exclusion: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('itemGroupIdExclusion') }})
    item_id: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('itemId') }})
    item_id_exclusion: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('itemIdExclusion') }})
    limit_quantity: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('limitQuantity') }})
    limit_value: Optional[PriceAmount] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('limitValue') }})
    long_title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('longTitle') }})
    minimum_purchase_amount: Optional[PriceAmount] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minimumPurchaseAmount') }})
    minimum_purchase_quantity: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minimumPurchaseQuantity') }})
    money_budget: Optional[PriceAmount] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('moneyBudget') }})
    money_off_amount: Optional[PriceAmount] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('moneyOffAmount') }})
    offer_type: Optional[PromotionOfferTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('offerType') }})
    order_limit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('orderLimit') }})
    percent_off: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('percentOff') }})
    product_applicability: Optional[PromotionProductApplicabilityEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('productApplicability') }})
    product_type: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('productType') }})
    product_type_exclusion: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('productTypeExclusion') }})
    promotion_destination_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('promotionDestinationIds') }})
    promotion_display_dates: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('promotionDisplayDates') }})
    promotion_display_time_period: Optional[TimePeriod] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('promotionDisplayTimePeriod') }})
    promotion_effective_dates: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('promotionEffectiveDates') }})
    promotion_effective_time_period: Optional[TimePeriod] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('promotionEffectiveTimePeriod') }})
    promotion_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('promotionId') }})
    promotion_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('promotionUrl') }})
    redemption_channel: Optional[List[PromotionRedemptionChannelEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('redemptionChannel') }})
    shipping_service_names: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shippingServiceNames') }})
    store_applicability: Optional[PromotionStoreApplicabilityEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('storeApplicability') }})
    store_code: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('storeCode') }})
    store_code_exclusion: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('storeCodeExclusion') }})
    target_country: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetCountry') }})
    
