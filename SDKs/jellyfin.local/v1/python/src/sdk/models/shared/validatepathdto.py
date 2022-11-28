from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ValidatePathDto:
    r"""ValidatePathDto
    Validate path object.
    """
    
    is_file: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IsFile') }})
    path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Path') }})
    validate_writable: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ValidateWritable') }})
    
