from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import volumerestore


@dataclass_json
@dataclass
class ListVolumeRestoresResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    volume_restores: Optional[List[volumerestore.VolumeRestore]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'volumeRestores' }})
    
