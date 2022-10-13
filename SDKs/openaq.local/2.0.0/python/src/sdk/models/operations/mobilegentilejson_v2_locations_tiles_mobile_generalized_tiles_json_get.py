from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class MobilegentilejsonV2LocationsTilesMobileGeneralizedTilesJSONGetResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    tile_json: Optional[shared.TileJSON] = field(default=None)
    
