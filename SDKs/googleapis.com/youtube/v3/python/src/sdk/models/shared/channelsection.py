from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import channelsectioncontentdetails
from . import channelsectionlocalization
from . import channelsectionsnippet
from . import channelsectiontargeting


@dataclass_json
@dataclass
class ChannelSection:
    content_details: Optional[channelsectioncontentdetails.ChannelSectionContentDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contentDetails' }})
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'etag' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    localizations: Optional[dict[str, channelsectionlocalization.ChannelSectionLocalization]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'localizations' }})
    snippet: Optional[channelsectionsnippet.ChannelSectionSnippet] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'snippet' }})
    targeting: Optional[channelsectiontargeting.ChannelSectionTargeting] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targeting' }})
    
