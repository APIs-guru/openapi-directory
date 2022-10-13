from dataclasses import dataclass, field
from typing import Enum,List
from dataclasses_json import dataclass_json

class HlRrequestGetHlrEnum(str, Enum):
    ONE = "1"


@dataclass_json
@dataclass
class HlRrequest:
    get_hlr: HlRrequestGetHlrEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'getHLR' }})
    keyid: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'keyid' }})
    num: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'num' }})
    
