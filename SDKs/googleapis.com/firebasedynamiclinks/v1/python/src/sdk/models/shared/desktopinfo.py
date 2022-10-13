from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DesktopInfo:
    desktop_fallback_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'desktopFallbackLink' }})
    
