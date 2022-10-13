from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import rule


@dataclass_json
@dataclass
class CreativeAssetSelection:
    default_asset_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'defaultAssetId' }})
    rules: Optional[List[rule.Rule]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rules' }})
    
