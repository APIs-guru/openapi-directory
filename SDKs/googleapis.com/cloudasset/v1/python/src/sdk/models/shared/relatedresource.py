from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class RelatedResource:
    asset_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assetType' }})
    full_resource_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fullResourceName' }})
    
