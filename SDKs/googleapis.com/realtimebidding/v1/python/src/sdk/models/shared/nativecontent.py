from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import image
from . import image
from . import image


@dataclass_json
@dataclass
class NativeContent:
    advertiser_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'advertiserName' }})
    app_icon: Optional[image.Image] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'appIcon' }})
    body: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'body' }})
    call_to_action: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'callToAction' }})
    click_link_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clickLinkUrl' }})
    click_tracking_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clickTrackingUrl' }})
    headline: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'headline' }})
    image: Optional[image.Image] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'image' }})
    logo: Optional[image.Image] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'logo' }})
    price_display_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'priceDisplayText' }})
    star_rating: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'starRating' }})
    video_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'videoUrl' }})
    video_vast_xml: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'videoVastXml' }})
    
