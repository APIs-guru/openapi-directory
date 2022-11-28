from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class ActivityContentDetailsPromotedItemCtaTypeEnum(str, Enum):
    CTA_TYPE_UNSPECIFIED = "ctaTypeUnspecified"
    VISIT_ADVERTISER_SITE = "visitAdvertiserSite"


@dataclass_json
@dataclass
class ActivityContentDetailsPromotedItem:
    r"""ActivityContentDetailsPromotedItem
    Details about a resource which is being promoted.
    """
    
    ad_tag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('adTag') }})
    click_tracking_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clickTrackingUrl') }})
    creative_view_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creativeViewUrl') }})
    cta_type: Optional[ActivityContentDetailsPromotedItemCtaTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ctaType') }})
    custom_cta_button_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customCtaButtonText') }})
    description_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('descriptionText') }})
    destination_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destinationUrl') }})
    forecasting_url: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('forecastingUrl') }})
    impression_url: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('impressionUrl') }})
    video_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('videoId') }})
    
