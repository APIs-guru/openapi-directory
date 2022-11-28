from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListVolumeRestoresResponse:
    r"""ListVolumeRestoresResponse
    Response message for ListVolumeRestores.
    """
    
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    volume_restores: Optional[List[VolumeRestore]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('volumeRestores') }})
    
