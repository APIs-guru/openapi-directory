from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudDiscoveryengineV1alphaPanelInfo:
    r"""GoogleCloudDiscoveryengineV1alphaPanelInfo
    Detailed panel information associated with a user event.
    """
    
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    panel_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('panelId') }})
    panel_position: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('panelPosition') }})
    total_panels: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalPanels') }})
    
