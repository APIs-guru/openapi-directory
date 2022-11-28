from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class ResponseStatusCodeStatusClassEnum(str, Enum):
    STATUS_CLASS_UNSPECIFIED = "STATUS_CLASS_UNSPECIFIED"
    STATUS_CLASS_1_XX = "STATUS_CLASS_1XX"
    STATUS_CLASS_2_XX = "STATUS_CLASS_2XX"
    STATUS_CLASS_3_XX = "STATUS_CLASS_3XX"
    STATUS_CLASS_4_XX = "STATUS_CLASS_4XX"
    STATUS_CLASS_5_XX = "STATUS_CLASS_5XX"
    STATUS_CLASS_ANY = "STATUS_CLASS_ANY"


@dataclass_json
@dataclass
class ResponseStatusCode:
    r"""ResponseStatusCode
    A status to accept. Either a status code class like \"2xx\", or an integer status code like \"200\".
    """
    
    status_class: Optional[ResponseStatusCodeStatusClassEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('statusClass') }})
    status_value: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('statusValue') }})
    
