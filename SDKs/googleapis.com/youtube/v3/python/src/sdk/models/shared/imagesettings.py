from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import localizedproperty
from . import localizedproperty
from . import localizedproperty
from . import localizedproperty
from . import localizedproperty


@dataclass_json
@dataclass
class ImageSettings:
    background_image_url: Optional[localizedproperty.LocalizedProperty] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'backgroundImageUrl' }})
    banner_external_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bannerExternalUrl' }})
    banner_image_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bannerImageUrl' }})
    banner_mobile_extra_hd_image_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bannerMobileExtraHdImageUrl' }})
    banner_mobile_hd_image_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bannerMobileHdImageUrl' }})
    banner_mobile_image_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bannerMobileImageUrl' }})
    banner_mobile_low_image_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bannerMobileLowImageUrl' }})
    banner_mobile_medium_hd_image_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bannerMobileMediumHdImageUrl' }})
    banner_tablet_extra_hd_image_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bannerTabletExtraHdImageUrl' }})
    banner_tablet_hd_image_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bannerTabletHdImageUrl' }})
    banner_tablet_image_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bannerTabletImageUrl' }})
    banner_tablet_low_image_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bannerTabletLowImageUrl' }})
    banner_tv_high_image_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bannerTvHighImageUrl' }})
    banner_tv_image_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bannerTvImageUrl' }})
    banner_tv_low_image_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bannerTvLowImageUrl' }})
    banner_tv_medium_image_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bannerTvMediumImageUrl' }})
    large_branded_banner_image_imap_script: Optional[localizedproperty.LocalizedProperty] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'largeBrandedBannerImageImapScript' }})
    large_branded_banner_image_url: Optional[localizedproperty.LocalizedProperty] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'largeBrandedBannerImageUrl' }})
    small_branded_banner_image_imap_script: Optional[localizedproperty.LocalizedProperty] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'smallBrandedBannerImageImapScript' }})
    small_branded_banner_image_url: Optional[localizedproperty.LocalizedProperty] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'smallBrandedBannerImageUrl' }})
    tracking_image_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'trackingImageUrl' }})
    watch_icon_image_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'watchIconImageUrl' }})
    
