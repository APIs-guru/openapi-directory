from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DesktopInfo:
    r"""DesktopInfo
    Desktop related attributes to the Dynamic Link.
    """
    
    desktop_fallback_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('desktopFallbackLink') }})
    
