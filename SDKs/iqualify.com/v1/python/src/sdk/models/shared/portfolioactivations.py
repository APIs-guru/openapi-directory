from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PortfolioActivationsMetadata:
    root_content_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rootContentId') }})
    

@dataclass_json
@dataclass
class PortfolioActivations:
    content_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contentId') }})
    end: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('end'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    info: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('info') }})
    learners_count: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('learnersCount') }})
    metadata: Optional[PortfolioActivationsMetadata] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    start: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('start'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
