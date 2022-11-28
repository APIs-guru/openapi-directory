from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class YoutubeAndPartnersSettingsContentCategoryEnum(str, Enum):
    YOUTUBE_AND_PARTNERS_CONTENT_CATEGORY_UNSPECIFIED = "YOUTUBE_AND_PARTNERS_CONTENT_CATEGORY_UNSPECIFIED"
    YOUTUBE_AND_PARTNERS_CONTENT_CATEGORY_STANDARD = "YOUTUBE_AND_PARTNERS_CONTENT_CATEGORY_STANDARD"
    YOUTUBE_AND_PARTNERS_CONTENT_CATEGORY_EXPANDED = "YOUTUBE_AND_PARTNERS_CONTENT_CATEGORY_EXPANDED"
    YOUTUBE_AND_PARTNERS_CONTENT_CATEGORY_LIMITED = "YOUTUBE_AND_PARTNERS_CONTENT_CATEGORY_LIMITED"


@dataclass_json
@dataclass
class YoutubeAndPartnersSettings:
    r"""YoutubeAndPartnersSettings
    Settings for YouTube and Partners line items.
    """
    
    bidding_strategy: Optional[YoutubeAndPartnersBiddingStrategy] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('biddingStrategy') }})
    content_category: Optional[YoutubeAndPartnersSettingsContentCategoryEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contentCategory') }})
    inventory_source_settings: Optional[YoutubeAndPartnersInventorySourceConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inventorySourceSettings') }})
    third_party_measurement_settings: Optional[YoutubeAndPartnersThirdPartyMeasurementSettings] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thirdPartyMeasurementSettings') }})
    view_frequency_cap: Optional[FrequencyCap] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('viewFrequencyCap') }})
    
