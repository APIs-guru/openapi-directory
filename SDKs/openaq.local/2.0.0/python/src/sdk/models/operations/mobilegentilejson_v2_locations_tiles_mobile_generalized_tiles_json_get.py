from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class MobilegentilejsonV2LocationsTilesMobileGeneralizedTilesJSONGetResponse:
    content_type: str = field()
    status_code: int = field()
    tile_json: Optional[shared.TileJSON] = field(default=None)
    
