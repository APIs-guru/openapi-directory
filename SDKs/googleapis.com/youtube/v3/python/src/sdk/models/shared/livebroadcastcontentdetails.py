from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import monitorstreaminfo

class LiveBroadcastContentDetailsClosedCaptionsTypeEnum(str, Enum):
    CLOSED_CAPTIONS_TYPE_UNSPECIFIED = "closedCaptionsTypeUnspecified"
    CLOSED_CAPTIONS_DISABLED = "closedCaptionsDisabled"
    CLOSED_CAPTIONS_HTTP_POST = "closedCaptionsHttpPost"
    CLOSED_CAPTIONS_EMBEDDED = "closedCaptionsEmbedded"

class LiveBroadcastContentDetailsLatencyPreferenceEnum(str, Enum):
    LATENCY_PREFERENCE_UNSPECIFIED = "latencyPreferenceUnspecified"
    NORMAL = "normal"
    LOW = "low"
    ULTRA_LOW = "ultraLow"

class LiveBroadcastContentDetailsProjectionEnum(str, Enum):
    PROJECTION_UNSPECIFIED = "projectionUnspecified"
    RECTANGULAR = "rectangular"
    THREE_HUNDRED_AND_SIXTY = "360"
    MESH = "mesh"

class LiveBroadcastContentDetailsStereoLayoutEnum(str, Enum):
    STEREO_LAYOUT_UNSPECIFIED = "stereoLayoutUnspecified"
    MONO = "mono"
    LEFT_RIGHT = "leftRight"
    TOP_BOTTOM = "topBottom"


@dataclass_json
@dataclass
class LiveBroadcastContentDetails:
    bound_stream_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'boundStreamId' }})
    bound_stream_last_update_time_ms: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'boundStreamLastUpdateTimeMs', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    closed_captions_type: Optional[LiveBroadcastContentDetailsClosedCaptionsTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'closedCaptionsType' }})
    enable_auto_start: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enableAutoStart' }})
    enable_auto_stop: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enableAutoStop' }})
    enable_closed_captions: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enableClosedCaptions' }})
    enable_content_encryption: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enableContentEncryption' }})
    enable_dvr: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enableDvr' }})
    enable_embed: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enableEmbed' }})
    enable_low_latency: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enableLowLatency' }})
    latency_preference: Optional[LiveBroadcastContentDetailsLatencyPreferenceEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'latencyPreference' }})
    mesh: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mesh' }})
    monitor_stream: Optional[monitorstreaminfo.MonitorStreamInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'monitorStream' }})
    projection: Optional[LiveBroadcastContentDetailsProjectionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'projection' }})
    record_from_start: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recordFromStart' }})
    start_with_slate: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startWithSlate' }})
    stereo_layout: Optional[LiveBroadcastContentDetailsStereoLayoutEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stereoLayout' }})
    
