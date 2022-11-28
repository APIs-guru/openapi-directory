from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class OverallQualityResponse:
    data_quality: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data_quality') }})
    end_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('end_date') }})
    row_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('row_count') }})
    sites: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sites') }})
    start_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('start_date') }})
    
