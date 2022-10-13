from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import temporalasset


@dataclass_json
@dataclass
class BatchGetAssetsHistoryResponse:
    assets: Optional[List[temporalasset.TemporalAsset]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assets' }})
    
