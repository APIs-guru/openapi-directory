from dataclasses import dataclass, field
from typing import List
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class HlRrequestGetHlrEnum(str, Enum):
    ONE = "1"


@dataclass_json
@dataclass
class HlRrequest:
    get_hlr: HlRrequestGetHlrEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('getHLR') }})
    keyid: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('keyid') }})
    num: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('num') }})
    
