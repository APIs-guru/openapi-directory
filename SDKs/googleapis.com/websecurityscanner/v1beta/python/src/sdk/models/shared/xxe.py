from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class XxePayloadLocationEnum(str, Enum):
    LOCATION_UNSPECIFIED = "LOCATION_UNSPECIFIED"
    COMPLETE_REQUEST_BODY = "COMPLETE_REQUEST_BODY"


@dataclass_json
@dataclass
class Xxe:
    r"""Xxe
    Information reported for an XXE.
    """
    
    payload_location: Optional[XxePayloadLocationEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payloadLocation') }})
    payload_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payloadValue') }})
    
