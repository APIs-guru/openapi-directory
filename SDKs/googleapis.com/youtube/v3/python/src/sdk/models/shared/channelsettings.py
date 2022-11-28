from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ChannelSettings:
    r"""ChannelSettings
    Branding properties for the channel view.
    """
    
    country: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('country') }})
    default_language: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultLanguage') }})
    default_tab: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultTab') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    featured_channels_title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('featuredChannelsTitle') }})
    featured_channels_urls: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('featuredChannelsUrls') }})
    keywords: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('keywords') }})
    moderate_comments: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('moderateComments') }})
    profile_color: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('profileColor') }})
    show_browse_view: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('showBrowseView') }})
    show_related_channels: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('showRelatedChannels') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    tracking_analytics_account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trackingAnalyticsAccountId') }})
    unsubscribed_trailer: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unsubscribedTrailer') }})
    
