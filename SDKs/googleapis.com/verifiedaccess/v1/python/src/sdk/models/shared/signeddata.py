from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class SignedData:
    r"""SignedData
    The wrapper message of any data and its signature.
    """
    
    data: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    signature: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('signature') }})
    
