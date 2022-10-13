from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import sourceresultcount


@dataclass_json
@dataclass
class ResultCounts:
    source_result_counts: Optional[List[sourceresultcount.SourceResultCount]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sourceResultCounts' }})
    
