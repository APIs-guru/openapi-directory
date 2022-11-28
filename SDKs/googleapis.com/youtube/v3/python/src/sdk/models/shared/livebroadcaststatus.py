from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class LiveBroadcastStatusLifeCycleStatusEnum(str, Enum):
    LIFE_CYCLE_STATUS_UNSPECIFIED = "lifeCycleStatusUnspecified"
    CREATED = "created"
    READY = "ready"
    TESTING = "testing"
    LIVE = "live"
    COMPLETE = "complete"
    REVOKED = "revoked"
    TEST_STARTING = "testStarting"
    LIVE_STARTING = "liveStarting"

class LiveBroadcastStatusLiveBroadcastPriorityEnum(str, Enum):
    LIVE_BROADCAST_PRIORITY_UNSPECIFIED = "liveBroadcastPriorityUnspecified"
    LOW = "low"
    NORMAL = "normal"
    HIGH = "high"

class LiveBroadcastStatusPrivacyStatusEnum(str, Enum):
    PUBLIC = "public"
    UNLISTED = "unlisted"
    PRIVATE = "private"

class LiveBroadcastStatusRecordingStatusEnum(str, Enum):
    LIVE_BROADCAST_RECORDING_STATUS_UNSPECIFIED = "liveBroadcastRecordingStatusUnspecified"
    NOT_RECORDING = "notRecording"
    RECORDING = "recording"
    RECORDED = "recorded"


@dataclass_json
@dataclass
class LiveBroadcastStatus:
    r"""LiveBroadcastStatus
    Live broadcast state.
    """
    
    life_cycle_status: Optional[LiveBroadcastStatusLifeCycleStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lifeCycleStatus') }})
    live_broadcast_priority: Optional[LiveBroadcastStatusLiveBroadcastPriorityEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('liveBroadcastPriority') }})
    made_for_kids: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('madeForKids') }})
    privacy_status: Optional[LiveBroadcastStatusPrivacyStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('privacyStatus') }})
    recording_status: Optional[LiveBroadcastStatusRecordingStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recordingStatus') }})
    self_declared_made_for_kids: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('selfDeclaredMadeForKids') }})
    
