from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

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
    r"""PublisherConnection
    An Open Bidding exchange's connection to a publisher. This is initiated by the publisher for the bidder to review. If approved by the bidder, this means that the bidder agrees to receive bid requests from the publisher.
    """
    
    bidding_state: Optional[PublisherConnectionBiddingStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('biddingState') }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    publisher_platform: Optional[PublisherConnectionPublisherPlatformEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publisherPlatform') }})
    
