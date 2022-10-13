from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import asset


@dataclass_json
@dataclass
class CreateAssetResponse:
    asset: Optional[asset.Asset] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'asset' }})
    
