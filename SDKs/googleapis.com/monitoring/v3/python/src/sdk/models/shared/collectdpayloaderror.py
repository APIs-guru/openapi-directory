from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CollectdPayloadError:
    r"""CollectdPayloadError
    Describes the error status for payloads that were not written.
    """
    
    error: Optional[Status] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('index') }})
    value_errors: Optional[List[CollectdValueError]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('valueErrors') }})
    
