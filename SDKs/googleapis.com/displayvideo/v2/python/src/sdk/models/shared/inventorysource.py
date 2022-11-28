from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class InventorySourceCommitmentEnum(str, Enum):
    INVENTORY_SOURCE_COMMITMENT_UNSPECIFIED = "INVENTORY_SOURCE_COMMITMENT_UNSPECIFIED"
    INVENTORY_SOURCE_COMMITMENT_GUARANTEED = "INVENTORY_SOURCE_COMMITMENT_GUARANTEED"
    INVENTORY_SOURCE_COMMITMENT_NON_GUARANTEED = "INVENTORY_SOURCE_COMMITMENT_NON_GUARANTEED"

class InventorySourceDeliveryMethodEnum(str, Enum):
    INVENTORY_SOURCE_DELIVERY_METHOD_UNSPECIFIED = "INVENTORY_SOURCE_DELIVERY_METHOD_UNSPECIFIED"
    INVENTORY_SOURCE_DELIVERY_METHOD_PROGRAMMATIC = "INVENTORY_SOURCE_DELIVERY_METHOD_PROGRAMMATIC"
    INVENTORY_SOURCE_DELIVERY_METHOD_TAG = "INVENTORY_SOURCE_DELIVERY_METHOD_TAG"

class InventorySourceExchangeEnum(str, Enum):
    EXCHANGE_UNSPECIFIED = "EXCHANGE_UNSPECIFIED"
    EXCHANGE_GOOGLE_AD_MANAGER = "EXCHANGE_GOOGLE_AD_MANAGER"
    EXCHANGE_APPNEXUS = "EXCHANGE_APPNEXUS"
    EXCHANGE_BRIGHTROLL = "EXCHANGE_BRIGHTROLL"
    EXCHANGE_ADFORM = "EXCHANGE_ADFORM"
    EXCHANGE_ADMETA = "EXCHANGE_ADMETA"
    EXCHANGE_ADMIXER = "EXCHANGE_ADMIXER"
    EXCHANGE_ADSMOGO = "EXCHANGE_ADSMOGO"
    EXCHANGE_ADSWIZZ = "EXCHANGE_ADSWIZZ"
    EXCHANGE_BIDSWITCH = "EXCHANGE_BIDSWITCH"
    EXCHANGE_BRIGHTROLL_DISPLAY = "EXCHANGE_BRIGHTROLL_DISPLAY"
    EXCHANGE_CADREON = "EXCHANGE_CADREON"
    EXCHANGE_DAILYMOTION = "EXCHANGE_DAILYMOTION"
    EXCHANGE_FIVE = "EXCHANGE_FIVE"
    EXCHANGE_FLUCT = "EXCHANGE_FLUCT"
    EXCHANGE_FREEWHEEL = "EXCHANGE_FREEWHEEL"
    EXCHANGE_GENIEE = "EXCHANGE_GENIEE"
    EXCHANGE_GUMGUM = "EXCHANGE_GUMGUM"
    EXCHANGE_IMOBILE = "EXCHANGE_IMOBILE"
    EXCHANGE_IBILLBOARD = "EXCHANGE_IBILLBOARD"
    EXCHANGE_IMPROVE_DIGITAL = "EXCHANGE_IMPROVE_DIGITAL"
    EXCHANGE_INDEX = "EXCHANGE_INDEX"
    EXCHANGE_KARGO = "EXCHANGE_KARGO"
    EXCHANGE_MICROAD = "EXCHANGE_MICROAD"
    EXCHANGE_MOPUB = "EXCHANGE_MOPUB"
    EXCHANGE_NEND = "EXCHANGE_NEND"
    EXCHANGE_ONE_BY_AOL_DISPLAY = "EXCHANGE_ONE_BY_AOL_DISPLAY"
    EXCHANGE_ONE_BY_AOL_MOBILE = "EXCHANGE_ONE_BY_AOL_MOBILE"
    EXCHANGE_ONE_BY_AOL_VIDEO = "EXCHANGE_ONE_BY_AOL_VIDEO"
    EXCHANGE_OOYALA = "EXCHANGE_OOYALA"
    EXCHANGE_OPENX = "EXCHANGE_OPENX"
    EXCHANGE_PERMODO = "EXCHANGE_PERMODO"
    EXCHANGE_PLATFORMONE = "EXCHANGE_PLATFORMONE"
    EXCHANGE_PLATFORMID = "EXCHANGE_PLATFORMID"
    EXCHANGE_PUBMATIC = "EXCHANGE_PUBMATIC"
    EXCHANGE_PULSEPOINT = "EXCHANGE_PULSEPOINT"
    EXCHANGE_REVENUEMAX = "EXCHANGE_REVENUEMAX"
    EXCHANGE_RUBICON = "EXCHANGE_RUBICON"
    EXCHANGE_SMARTCLIP = "EXCHANGE_SMARTCLIP"
    EXCHANGE_SMARTRTB = "EXCHANGE_SMARTRTB"
    EXCHANGE_SMARTSTREAMTV = "EXCHANGE_SMARTSTREAMTV"
    EXCHANGE_SOVRN = "EXCHANGE_SOVRN"
    EXCHANGE_SPOTXCHANGE = "EXCHANGE_SPOTXCHANGE"
    EXCHANGE_STROER = "EXCHANGE_STROER"
    EXCHANGE_TEADSTV = "EXCHANGE_TEADSTV"
    EXCHANGE_TELARIA = "EXCHANGE_TELARIA"
    EXCHANGE_TVN = "EXCHANGE_TVN"
    EXCHANGE_UNITED = "EXCHANGE_UNITED"
    EXCHANGE_YIELDLAB = "EXCHANGE_YIELDLAB"
    EXCHANGE_YIELDMO = "EXCHANGE_YIELDMO"
    EXCHANGE_UNRULYX = "EXCHANGE_UNRULYX"
    EXCHANGE_OPEN8 = "EXCHANGE_OPEN8"
    EXCHANGE_TRITON = "EXCHANGE_TRITON"
    EXCHANGE_TRIPLELIFT = "EXCHANGE_TRIPLELIFT"
    EXCHANGE_TABOOLA = "EXCHANGE_TABOOLA"
    EXCHANGE_INMOBI = "EXCHANGE_INMOBI"
    EXCHANGE_SMAATO = "EXCHANGE_SMAATO"
    EXCHANGE_AJA = "EXCHANGE_AJA"
    EXCHANGE_SUPERSHIP = "EXCHANGE_SUPERSHIP"
    EXCHANGE_NEXSTAR_DIGITAL = "EXCHANGE_NEXSTAR_DIGITAL"
    EXCHANGE_WAZE = "EXCHANGE_WAZE"
    EXCHANGE_SOUNDCAST = "EXCHANGE_SOUNDCAST"
    EXCHANGE_SHARETHROUGH = "EXCHANGE_SHARETHROUGH"
    EXCHANGE_FYBER = "EXCHANGE_FYBER"
    EXCHANGE_RED_FOR_PUBLISHERS = "EXCHANGE_RED_FOR_PUBLISHERS"
    EXCHANGE_MEDIANET = "EXCHANGE_MEDIANET"
    EXCHANGE_TAPJOY = "EXCHANGE_TAPJOY"
    EXCHANGE_VISTAR = "EXCHANGE_VISTAR"
    EXCHANGE_DAX = "EXCHANGE_DAX"

class InventorySourceInventorySourceProductTypeEnum(str, Enum):
    INVENTORY_SOURCE_PRODUCT_TYPE_UNSPECIFIED = "INVENTORY_SOURCE_PRODUCT_TYPE_UNSPECIFIED"
    PREFERRED_DEAL = "PREFERRED_DEAL"
    PRIVATE_AUCTION = "PRIVATE_AUCTION"
    PROGRAMMATIC_GUARANTEED = "PROGRAMMATIC_GUARANTEED"
    TAG_GUARANTEED = "TAG_GUARANTEED"
    YOUTUBE_RESERVE = "YOUTUBE_RESERVE"
    INSTANT_RESERVE = "INSTANT_RESERVE"
    GUARANTEED_PACKAGE = "GUARANTEED_PACKAGE"
    PROGRAMMATIC_TV = "PROGRAMMATIC_TV"
    AUCTION_PACKAGE = "AUCTION_PACKAGE"

class InventorySourceInventorySourceTypeEnum(str, Enum):
    INVENTORY_SOURCE_TYPE_UNSPECIFIED = "INVENTORY_SOURCE_TYPE_UNSPECIFIED"
    INVENTORY_SOURCE_TYPE_PRIVATE = "INVENTORY_SOURCE_TYPE_PRIVATE"
    INVENTORY_SOURCE_TYPE_AUCTION_PACKAGE = "INVENTORY_SOURCE_TYPE_AUCTION_PACKAGE"


@dataclass_json
@dataclass
class InventorySource:
    r"""InventorySource
    An inventory source.
    """
    
    commitment: Optional[InventorySourceCommitmentEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('commitment') }})
    creative_configs: Optional[List[CreativeConfig]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creativeConfigs') }})
    deal_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dealId') }})
    delivery_method: Optional[InventorySourceDeliveryMethodEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deliveryMethod') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    exchange: Optional[InventorySourceExchangeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exchange') }})
    guaranteed_order_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('guaranteedOrderId') }})
    inventory_source_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inventorySourceId') }})
    inventory_source_product_type: Optional[InventorySourceInventorySourceProductTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inventorySourceProductType') }})
    inventory_source_type: Optional[InventorySourceInventorySourceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inventorySourceType') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    publisher_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publisherName') }})
    rate_details: Optional[RateDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rateDetails') }})
    read_advertiser_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('readAdvertiserIds') }})
    read_partner_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('readPartnerIds') }})
    read_write_accessors: Optional[InventorySourceAccessors] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('readWriteAccessors') }})
    status: Optional[InventorySourceStatus] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    sub_site_property_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subSitePropertyId') }})
    time_range: Optional[TimeRange] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeRange') }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    

@dataclass_json
@dataclass
class InventorySourceInput:
    r"""InventorySourceInput
    An inventory source.
    """
    
    commitment: Optional[InventorySourceCommitmentEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('commitment') }})
    creative_configs: Optional[List[CreativeConfig]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creativeConfigs') }})
    deal_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dealId') }})
    delivery_method: Optional[InventorySourceDeliveryMethodEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deliveryMethod') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    exchange: Optional[InventorySourceExchangeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exchange') }})
    guaranteed_order_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('guaranteedOrderId') }})
    inventory_source_type: Optional[InventorySourceInventorySourceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inventorySourceType') }})
    publisher_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publisherName') }})
    rate_details: Optional[RateDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rateDetails') }})
    read_write_accessors: Optional[InventorySourceAccessors] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('readWriteAccessors') }})
    status: Optional[InventorySourceStatusInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    sub_site_property_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subSitePropertyId') }})
    time_range: Optional[TimeRange] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeRange') }})
    
