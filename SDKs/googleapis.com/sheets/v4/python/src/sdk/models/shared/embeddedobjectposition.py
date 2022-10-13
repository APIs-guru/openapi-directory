from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import overlayposition


@dataclass_json
@dataclass
class EmbeddedObjectPosition:
    new_sheet: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'newSheet' }})
    overlay_position: Optional[overlayposition.OverlayPosition] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'overlayPosition' }})
    sheet_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sheetId' }})
    
