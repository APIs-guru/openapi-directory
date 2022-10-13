from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import keepuntil_enum
from . import baseitemdto
from . import recordingstatus_enum


@dataclass_json
@dataclass
class TimerInfoDto:
    channel_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ChannelId' }})
    channel_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ChannelName' }})
    channel_primary_image_tag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ChannelPrimaryImageTag' }})
    end_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EndDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    external_channel_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExternalChannelId' }})
    external_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExternalId' }})
    external_program_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExternalProgramId' }})
    external_series_timer_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExternalSeriesTimerId' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Id' }})
    is_post_padding_required: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IsPostPaddingRequired' }})
    is_pre_padding_required: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IsPrePaddingRequired' }})
    keep_until: Optional[keepuntil_enum.KeepUntilEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KeepUntil' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    overview: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Overview' }})
    parent_backdrop_image_tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ParentBackdropImageTags' }})
    parent_backdrop_item_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ParentBackdropItemId' }})
    post_padding_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PostPaddingSeconds' }})
    pre_padding_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PrePaddingSeconds' }})
    priority: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Priority' }})
    program_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProgramId' }})
    program_info: Optional[baseitemdto.BaseItemDto] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProgramInfo' }})
    run_time_ticks: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RunTimeTicks' }})
    series_timer_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SeriesTimerId' }})
    server_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ServerId' }})
    service_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ServiceName' }})
    start_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StartDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    status: Optional[recordingstatus_enum.RecordingStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    
