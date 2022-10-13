from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from . import googlehomeenterprisesdmv1parentrelation


@dataclass_json
@dataclass
class GoogleHomeEnterpriseSdmV1Device:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    parent_relations: Optional[List[googlehomeenterprisesdmv1parentrelation.GoogleHomeEnterpriseSdmV1ParentRelation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parentRelations' }})
    traits: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'traits' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
