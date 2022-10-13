from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class RelevantLocationRelationTypeEnum(str, Enum):
    RELATION_TYPE_UNSPECIFIED = "RELATION_TYPE_UNSPECIFIED"
    DEPARTMENT_OF = "DEPARTMENT_OF"
    INDEPENDENT_ESTABLISHMENT_IN = "INDEPENDENT_ESTABLISHMENT_IN"


@dataclass_json
@dataclass
class RelevantLocation:
    place_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'placeId' }})
    relation_type: Optional[RelevantLocationRelationTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'relationType' }})
    
