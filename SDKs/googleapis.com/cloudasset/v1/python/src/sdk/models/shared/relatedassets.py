from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import relatedasset
from . import relationshipattributes


@dataclass_json
@dataclass
class RelatedAssets:
    assets: Optional[List[relatedasset.RelatedAsset]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assets' }})
    relationship_attributes: Optional[relationshipattributes.RelationshipAttributes] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'relationshipAttributes' }})
    
