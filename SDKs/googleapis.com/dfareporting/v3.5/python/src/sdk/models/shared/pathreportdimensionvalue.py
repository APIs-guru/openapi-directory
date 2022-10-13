from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json

class PathReportDimensionValueMatchTypeEnum(str, Enum):
    EXACT = "EXACT"
    BEGINS_WITH = "BEGINS_WITH"
    CONTAINS = "CONTAINS"
    WILDCARD_EXPRESSION = "WILDCARD_EXPRESSION"


@dataclass_json
@dataclass
class PathReportDimensionValue:
    dimension_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dimensionName' }})
    ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ids' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    match_type: Optional[PathReportDimensionValueMatchTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'matchType' }})
    values: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'values' }})
    
