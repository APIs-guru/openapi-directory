from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class LinkedVpnTunnels:
    site_to_site_data_transfer: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'siteToSiteDataTransfer' }})
    uris: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uris' }})
    
