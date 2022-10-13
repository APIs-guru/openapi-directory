from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from . import daypattern_enum
from . import dayofweek_enum
from . import keepuntil_enum


@dataclass_json
@dataclass
class SeriesTimerInfoDto:
    channel_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ChannelId' }})
    channel_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ChannelName' }})
    channel_primary_image_tag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ChannelPrimaryImageTag' }})
    day_pattern: Optional[daypattern_enum.DayPatternEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DayPattern' }})
    days: Optional[List[dayofweek_enum.DayOfWeekEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Days' }})
    end_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EndDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    external_channel_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExternalChannelId' }})
    external_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExternalId' }})
    external_program_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExternalProgramId' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Id' }})
    image_tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ImageTags' }})
    is_post_padding_required: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IsPostPaddingRequired' }})
    is_pre_padding_required: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IsPrePaddingRequired' }})
    keep_until: Optional[keepuntil_enum.KeepUntilEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KeepUntil' }})
    keep_up_to: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KeepUpTo' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    overview: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Overview' }})
    parent_backdrop_image_tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ParentBackdropImageTags' }})
    parent_backdrop_item_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ParentBackdropItemId' }})
    parent_primary_image_item_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ParentPrimaryImageItemId' }})
    parent_primary_image_tag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ParentPrimaryImageTag' }})
    parent_thumb_image_tag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ParentThumbImageTag' }})
    parent_thumb_item_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ParentThumbItemId' }})
    post_padding_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PostPaddingSeconds' }})
    pre_padding_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PrePaddingSeconds' }})
    priority: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Priority' }})
    program_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProgramId' }})
    record_any_channel: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RecordAnyChannel' }})
    record_any_time: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RecordAnyTime' }})
    record_new_only: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RecordNewOnly' }})
    server_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ServerId' }})
    service_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ServiceName' }})
    skip_episodes_in_library: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SkipEpisodesInLibrary' }})
    start_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StartDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    
