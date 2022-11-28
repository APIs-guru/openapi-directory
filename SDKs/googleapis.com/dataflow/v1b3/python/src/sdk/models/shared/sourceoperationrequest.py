from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SourceOperationRequest:
    r"""SourceOperationRequest
    A work item that represents the different operations that can be performed on a user-defined Source specification.
    """
    
    get_metadata: Optional[SourceGetMetadataRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('getMetadata') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    original_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('originalName') }})
    split: Optional[SourceSplitRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('split') }})
    stage_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stageName') }})
    system_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('systemName') }})
    
