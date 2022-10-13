from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import asset
from . import timewindow


@dataclass_json
@dataclass
class TemporalAsset:
    asset: Optional[asset.Asset] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'asset' }})
    deleted: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deleted' }})
    window: Optional[timewindow.TimeWindow] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'window' }})
    
