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
class WriteResult:
    r"""WriteResult
    The result of applying a write.
    """
    
    transform_results: Optional[List[Value]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transformResults') }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    
