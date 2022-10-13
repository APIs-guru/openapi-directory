from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import billingratetieredrate

class BillingRateTypeEnum(str, Enum):
    AD_SERVING = "AD_SERVING"
    CLICKS = "CLICKS"
    MINIMUM_SERVICE = "MINIMUM_SERVICE"
    PATH_TO_CONVERSION = "PATH_TO_CONVERSION"
    RICH_MEDIA_INPAGE = "RICH_MEDIA_INPAGE"
    RICH_MEDIA_EXPANDING = "RICH_MEDIA_EXPANDING"
    RICH_MEDIA_FLOATING = "RICH_MEDIA_FLOATING"
    RICH_MEDIA_VIDEO = "RICH_MEDIA_VIDEO"
    RICH_MEDIA_TEASER = "RICH_MEDIA_TEASER"
    RICH_MEDIA_VPAID = "RICH_MEDIA_VPAID"
    INSTREAM_VIDEO = "INSTREAM_VIDEO"
    PIXEL = "PIXEL"
    TRACKING = "TRACKING"
    TRAFFICKING_FEATURE = "TRAFFICKING_FEATURE"
    CUSTOM_REPORTS = "CUSTOM_REPORTS"
    EXPOSURE_TO_CONVERSION = "EXPOSURE_TO_CONVERSION"
    DATA_TRANSFER = "DATA_TRANSFER"
    DATA_TRANSFER_SETUP = "DATA_TRANSFER_SETUP"
    STARTUP = "STARTUP"
    STATEMENT_OF_WORK = "STATEMENT_OF_WORK"
    PROVIDED_LIST = "PROVIDED_LIST"
    PROVIDED_LIST_SETUP = "PROVIDED_LIST_SETUP"
    ENHANCED_FORMATS = "ENHANCED_FORMATS"
    TRACKING_AD_IMPRESSIONS = "TRACKING_AD_IMPRESSIONS"
    TRACKING_AD_CLICKS = "TRACKING_AD_CLICKS"
    NIELSEN_DIGITAL_AD_RATINGS_FEE = "NIELSEN_DIGITAL_AD_RATINGS_FEE"
    INSTREAM_VIDEO_REDIRECT = "INSTREAM_VIDEO_REDIRECT"
    INSTREAM_VIDEO_VPAID = "INSTREAM_VIDEO_VPAID"
    DISPLAY_AD_SERVING = "DISPLAY_AD_SERVING"
    VIDEO_AD_SERVING = "VIDEO_AD_SERVING"
    AUDIO_AD_SERVING = "AUDIO_AD_SERVING"
    ADVANCED_DISPLAY_AD_SERVING = "ADVANCED_DISPLAY_AD_SERVING"

class BillingRateUnitOfMeasureEnum(str, Enum):
    CPM = "CPM"
    CPC = "CPC"
    EA = "EA"
    P2_C = "P2C"


@dataclass_json
@dataclass
class BillingRate:
    currency_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currencyCode' }})
    end_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endDate' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    rate_in_micros: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rateInMicros' }})
    start_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startDate' }})
    tiered_rates: Optional[List[billingratetieredrate.BillingRateTieredRate]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tieredRates' }})
    type: Optional[BillingRateTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    unit_of_measure: Optional[BillingRateUnitOfMeasureEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unitOfMeasure' }})
    
