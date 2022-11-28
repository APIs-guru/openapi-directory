from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class NiRealtimeData:
    r"""NiRealtimeData
    Real time data about the `number`
    """
    
    active_status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('active_status') }})
    handset_status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('handset_status') }})
    
