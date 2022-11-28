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
class ConversionStatus:
    r"""ConversionStatus
    The original conversion that was inserted or updated and whether there were any errors.
    """
    
    conversion: Optional[Conversion] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('conversion') }})
    errors: Optional[List[ConversionError]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    
