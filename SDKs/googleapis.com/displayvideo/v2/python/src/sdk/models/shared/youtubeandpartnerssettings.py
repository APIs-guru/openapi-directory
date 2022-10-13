from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import youtubeandpartnersbiddingstrategy
from . import youtubeandpartnersinventorysourceconfig
from . import youtubeandpartnersthirdpartymeasurementsettings
from . import frequencycap

class YoutubeAndPartnersSettingsContentCategoryEnum(str, Enum):
    YOUTUBE_AND_PARTNERS_CONTENT_CATEGORY_UNSPECIFIED = "YOUTUBE_AND_PARTNERS_CONTENT_CATEGORY_UNSPECIFIED"
    YOUTUBE_AND_PARTNERS_CONTENT_CATEGORY_STANDARD = "YOUTUBE_AND_PARTNERS_CONTENT_CATEGORY_STANDARD"
    YOUTUBE_AND_PARTNERS_CONTENT_CATEGORY_EXPANDED = "YOUTUBE_AND_PARTNERS_CONTENT_CATEGORY_EXPANDED"
    YOUTUBE_AND_PARTNERS_CONTENT_CATEGORY_LIMITED = "YOUTUBE_AND_PARTNERS_CONTENT_CATEGORY_LIMITED"


@dataclass_json
@dataclass
class YoutubeAndPartnersSettings:
    bidding_strategy: Optional[youtubeandpartnersbiddingstrategy.YoutubeAndPartnersBiddingStrategy] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'biddingStrategy' }})
    content_category: Optional[YoutubeAndPartnersSettingsContentCategoryEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contentCategory' }})
    inventory_source_settings: Optional[youtubeandpartnersinventorysourceconfig.YoutubeAndPartnersInventorySourceConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inventorySourceSettings' }})
    third_party_measurement_settings: Optional[youtubeandpartnersthirdpartymeasurementsettings.YoutubeAndPartnersThirdPartyMeasurementSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'thirdPartyMeasurementSettings' }})
    view_frequency_cap: Optional[frequencycap.FrequencyCap] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'viewFrequencyCap' }})
    
