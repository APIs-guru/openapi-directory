from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SourceOperationResponse:
    r"""SourceOperationResponse
    The result of a SourceOperationRequest, specified in ReportWorkItemStatusRequest.source_operation when the work item is completed.
    """
    
    get_metadata: Optional[SourceGetMetadataResponse] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('getMetadata') }})
    split: Optional[SourceSplitResponse] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('split') }})
    
