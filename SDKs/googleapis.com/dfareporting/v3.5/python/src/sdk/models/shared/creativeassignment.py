from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreativeAssignment:
    r"""CreativeAssignment
    Creative Assignment.
    """
    
    active: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('active') }})
    apply_event_tags: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('applyEventTags') }})
    click_through_url: Optional[ClickThroughURL] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clickThroughUrl') }})
    companion_creative_overrides: Optional[List[CompanionClickThroughOverride]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('companionCreativeOverrides') }})
    creative_group_assignments: Optional[List[CreativeGroupAssignment]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creativeGroupAssignments') }})
    creative_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creativeId') }})
    creative_id_dimension_value: Optional[DimensionValue] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creativeIdDimensionValue') }})
    end_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    rich_media_exit_overrides: Optional[List[RichMediaExitOverride]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('richMediaExitOverrides') }})
    sequence: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sequence') }})
    ssl_compliant: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sslCompliant') }})
    start_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    weight: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('weight') }})
    
