from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class RelatedAsset:
    ancestors: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ancestors' }})
    asset: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'asset' }})
    asset_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assetType' }})
    relationship_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'relationshipType' }})
    
