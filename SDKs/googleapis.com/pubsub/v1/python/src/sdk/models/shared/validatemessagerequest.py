from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class ValidateMessageRequestEncodingEnum(str, Enum):
    ENCODING_UNSPECIFIED = "ENCODING_UNSPECIFIED"
    JSON = "JSON"
    BINARY = "BINARY"


@dataclass_json
@dataclass
class ValidateMessageRequestInput:
    r"""ValidateMessageRequestInput
    Request for the `ValidateMessage` method.
    """
    
    encoding: Optional[ValidateMessageRequestEncodingEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('encoding') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    schema: Optional[SchemaInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('schema') }})
    
