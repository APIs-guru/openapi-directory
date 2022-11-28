from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Channel:
    r"""Channel
    A *channel* resource contains information about a YouTube channel.
    """
    
    audit_details: Optional[ChannelAuditDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('auditDetails') }})
    branding_settings: Optional[ChannelBrandingSettings] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('brandingSettings') }})
    content_details: Optional[ChannelContentDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contentDetails') }})
    content_owner_details: Optional[ChannelContentOwnerDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contentOwnerDetails') }})
    conversion_pings: Optional[ChannelConversionPings] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('conversionPings') }})
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('etag') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    localizations: Optional[dict[str, ChannelLocalization]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('localizations') }})
    snippet: Optional[ChannelSnippet] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('snippet') }})
    statistics: Optional[ChannelStatistics] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('statistics') }})
    status: Optional[ChannelStatus] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    topic_details: Optional[ChannelTopicDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('topicDetails') }})
    
