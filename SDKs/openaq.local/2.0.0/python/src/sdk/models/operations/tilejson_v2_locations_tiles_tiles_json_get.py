from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class TilejsonV2LocationsTilesTilesJSONGetResponse:
    content_type: str = field()
    status_code: int = field()
    tile_json: Optional[shared.TileJSON] = field(default=None)
    
