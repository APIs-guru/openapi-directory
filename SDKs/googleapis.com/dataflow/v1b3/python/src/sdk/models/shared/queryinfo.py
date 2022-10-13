from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json

class QueryInfoQueryPropertyEnum(str, Enum):
    QUERY_PROPERTY_UNSPECIFIED = "QUERY_PROPERTY_UNSPECIFIED"
    HAS_UNBOUNDED_SOURCE = "HAS_UNBOUNDED_SOURCE"


@dataclass_json
@dataclass
class QueryInfo:
    query_property: Optional[List[QueryInfoQueryPropertyEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'queryProperty' }})
    
