from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ConversionsBatchInsertResponse:
    r"""ConversionsBatchInsertResponse
    Insert Conversions Response.
    """
    
    has_failures: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hasFailures') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    status: Optional[List[ConversionStatus]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
