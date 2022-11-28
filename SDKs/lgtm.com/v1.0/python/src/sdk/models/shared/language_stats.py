from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class LanguageStatsStatusEnum(str, Enum):
    SUCCESS = "success"
    FAILURE = "failure"
    PENDING = "pending"


@dataclass_json
@dataclass
class LanguageStats:
    alerts: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('alerts') }})
    analysis_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('analysis-date'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    commit_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('commit-date'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    commit_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('commit-id') }})
    language: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('language') }})
    lines: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lines') }})
    status: Optional[LanguageStatsStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
