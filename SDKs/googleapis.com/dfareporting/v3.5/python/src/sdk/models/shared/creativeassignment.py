from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import clickthroughurl
from . import companionclickthroughoverride
from . import creativegroupassignment
from . import dimensionvalue
from . import richmediaexitoverride


@dataclass_json
@dataclass
class CreativeAssignment:
    active: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'active' }})
    apply_event_tags: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'applyEventTags' }})
    click_through_url: Optional[clickthroughurl.ClickThroughURL] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clickThroughUrl' }})
    companion_creative_overrides: Optional[List[companionclickthroughoverride.CompanionClickThroughOverride]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'companionCreativeOverrides' }})
    creative_group_assignments: Optional[List[creativegroupassignment.CreativeGroupAssignment]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creativeGroupAssignments' }})
    creative_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creativeId' }})
    creative_id_dimension_value: Optional[dimensionvalue.DimensionValue] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creativeIdDimensionValue' }})
    end_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    rich_media_exit_overrides: Optional[List[richmediaexitoverride.RichMediaExitOverride]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'richMediaExitOverrides' }})
    sequence: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sequence' }})
    ssl_compliant: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sslCompliant' }})
    start_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    weight: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'weight' }})
    
