from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class UpdateSchemaRequest:
    debug_options: Optional[DebugOptions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('debugOptions') }})
    schema: Optional[Schema] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('schema') }})
    validate_only: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('validateOnly') }})
    
