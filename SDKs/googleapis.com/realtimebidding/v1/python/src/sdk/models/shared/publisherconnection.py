from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class PublisherConnectionBiddingStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    PENDING = "PENDING"
    REJECTED = "REJECTED"
    APPROVED = "APPROVED"

class PublisherConnectionPublisherPlatformEnum(str, Enum):
    PUBLISHER_PLATFORM_UNSPECIFIED = "PUBLISHER_PLATFORM_UNSPECIFIED"
    GOOGLE_AD_MANAGER = "GOOGLE_AD_MANAGER"
    ADMOB = "ADMOB"


@dataclass_json
@dataclass
class PublisherConnection:
    bidding_state: Optional[PublisherConnectionBiddingStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'biddingState' }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    publisher_platform: Optional[PublisherConnectionPublisherPlatformEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'publisherPlatform' }})
    
