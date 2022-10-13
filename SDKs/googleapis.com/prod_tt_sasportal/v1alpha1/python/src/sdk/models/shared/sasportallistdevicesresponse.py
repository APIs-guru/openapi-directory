from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import sasportaldevice


@dataclass_json
@dataclass
class SasPortalListDevicesResponse:
    devices: Optional[List[sasportaldevice.SasPortalDevice]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'devices' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
