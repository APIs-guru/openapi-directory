from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class SynchronizationResult:
    added: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('added') }})
    failed: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('failed') }})
    ignored: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ignored') }})
    removed: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('removed') }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    updated: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updated') }})
    
