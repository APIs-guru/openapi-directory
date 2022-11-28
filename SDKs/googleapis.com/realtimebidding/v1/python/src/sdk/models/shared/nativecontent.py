from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class NativeContent:
    r"""NativeContent
    Native content for a creative.
    """
    
    advertiser_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('advertiserName') }})
    app_icon: Optional[Image] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appIcon') }})
    body: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('body') }})
    call_to_action: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('callToAction') }})
    click_link_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clickLinkUrl') }})
    click_tracking_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clickTrackingUrl') }})
    headline: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('headline') }})
    image: Optional[Image] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('image') }})
    logo: Optional[Image] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('logo') }})
    price_display_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('priceDisplayText') }})
    star_rating: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('starRating') }})
    video_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('videoUrl') }})
    video_vast_xml: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('videoVastXml') }})
    
