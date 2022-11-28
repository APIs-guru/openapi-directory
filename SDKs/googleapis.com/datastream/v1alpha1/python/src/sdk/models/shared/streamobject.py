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
class StreamObject:
    r"""StreamObject
    A specific stream object (e.g a specific DB table).
    """
    
    backfill_job: Optional[BackfillJob] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('backfillJob') }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    errors: Optional[List[Error]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    source_object: Optional[SourceObjectIdentifier] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceObject') }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    
