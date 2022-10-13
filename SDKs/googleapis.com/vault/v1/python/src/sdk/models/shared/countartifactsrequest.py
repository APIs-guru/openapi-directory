from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import query

class CountArtifactsRequestViewEnum(str, Enum):
    COUNT_RESULT_VIEW_UNSPECIFIED = "COUNT_RESULT_VIEW_UNSPECIFIED"
    TOTAL_COUNT = "TOTAL_COUNT"
    ALL = "ALL"


@dataclass_json
@dataclass
class CountArtifactsRequest:
    query: Optional[query.Query] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'query' }})
    view: Optional[CountArtifactsRequestViewEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'view' }})
    
