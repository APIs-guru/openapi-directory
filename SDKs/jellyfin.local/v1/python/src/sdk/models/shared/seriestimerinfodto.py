from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SeriesTimerInfoDto:
    r"""SeriesTimerInfoDto
    Class SeriesTimerInfoDto.
    """
    
    channel_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ChannelId') }})
    channel_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ChannelName') }})
    channel_primary_image_tag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ChannelPrimaryImageTag') }})
    day_pattern: Optional[DayPatternEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DayPattern') }})
    days: Optional[List[DayOfWeekEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Days') }})
    end_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    external_channel_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExternalChannelId') }})
    external_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExternalId') }})
    external_program_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExternalProgramId') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Id') }})
    image_tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ImageTags') }})
    is_post_padding_required: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IsPostPaddingRequired') }})
    is_pre_padding_required: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IsPrePaddingRequired') }})
    keep_until: Optional[KeepUntilEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KeepUntil') }})
    keep_up_to: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KeepUpTo') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    overview: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Overview') }})
    parent_backdrop_image_tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ParentBackdropImageTags') }})
    parent_backdrop_item_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ParentBackdropItemId') }})
    parent_primary_image_item_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ParentPrimaryImageItemId') }})
    parent_primary_image_tag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ParentPrimaryImageTag') }})
    parent_thumb_image_tag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ParentThumbImageTag') }})
    parent_thumb_item_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ParentThumbItemId') }})
    post_padding_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PostPaddingSeconds') }})
    pre_padding_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PrePaddingSeconds') }})
    priority: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Priority') }})
    program_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProgramId') }})
    record_any_channel: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RecordAnyChannel') }})
    record_any_time: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RecordAnyTime') }})
    record_new_only: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RecordNewOnly') }})
    server_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServerId') }})
    service_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServiceName') }})
    skip_episodes_in_library: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SkipEpisodesInLibrary') }})
    start_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StartDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    
