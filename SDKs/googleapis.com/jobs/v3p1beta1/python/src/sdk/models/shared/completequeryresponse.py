from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CompleteQueryResponse:
    r"""CompleteQueryResponse
    Output only. Response of auto-complete query.
    """
    
    completion_results: Optional[List[CompletionResult]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('completionResults') }})
    metadata: Optional[ResponseMetadata] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    
