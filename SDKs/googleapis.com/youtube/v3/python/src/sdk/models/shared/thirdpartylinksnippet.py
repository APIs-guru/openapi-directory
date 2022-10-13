from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import channeltostorelinkdetails

class ThirdPartyLinkSnippetTypeEnum(str, Enum):
    LINK_UNSPECIFIED = "linkUnspecified"
    CHANNEL_TO_STORE_LINK = "channelToStoreLink"


@dataclass_json
@dataclass
class ThirdPartyLinkSnippet:
    channel_to_store_link: Optional[channeltostorelinkdetails.ChannelToStoreLinkDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'channelToStoreLink' }})
    type: Optional[ThirdPartyLinkSnippetTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
