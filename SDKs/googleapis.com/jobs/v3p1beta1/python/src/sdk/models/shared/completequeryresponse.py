from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import completionresult
from . import responsemetadata


@dataclass_json
@dataclass
class CompleteQueryResponse:
    completion_results: Optional[List[completionresult.CompletionResult]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'completionResults' }})
    metadata: Optional[responsemetadata.ResponseMetadata] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metadata' }})
    
