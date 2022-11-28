from dataclasses import dataclass, field
from typing import Optional


@dataclass
class DemoV2LocationsTilesViewerGetResponse:
    content_type: str = field()
    status_code: int = field()
    demo_v2_locations_tiles_viewer_get_200_text_html_string: Optional[str] = field(default=None)
    
