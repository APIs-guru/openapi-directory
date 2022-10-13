from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import channelauditdetails
from . import channelbrandingsettings
from . import channelcontentdetails
from . import channelcontentownerdetails
from . import channelconversionpings
from . import channellocalization
from . import channelsnippet
from . import channelstatistics
from . import channelstatus
from . import channeltopicdetails


@dataclass_json
@dataclass
class Channel:
    audit_details: Optional[channelauditdetails.ChannelAuditDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'auditDetails' }})
    branding_settings: Optional[channelbrandingsettings.ChannelBrandingSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'brandingSettings' }})
    content_details: Optional[channelcontentdetails.ChannelContentDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contentDetails' }})
    content_owner_details: Optional[channelcontentownerdetails.ChannelContentOwnerDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contentOwnerDetails' }})
    conversion_pings: Optional[channelconversionpings.ChannelConversionPings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'conversionPings' }})
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'etag' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    localizations: Optional[dict[str, channellocalization.ChannelLocalization]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'localizations' }})
    snippet: Optional[channelsnippet.ChannelSnippet] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'snippet' }})
    statistics: Optional[channelstatistics.ChannelStatistics] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'statistics' }})
    status: Optional[channelstatus.ChannelStatus] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    topic_details: Optional[channeltopicdetails.ChannelTopicDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'topicDetails' }})
    
