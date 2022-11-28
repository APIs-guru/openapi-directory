from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class LineConnection:
    r"""LineConnection
    The properties for one end of a Line connection.
    """
    
    connected_object_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('connectedObjectId') }})
    connection_site_index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('connectionSiteIndex') }})
    
