from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudretailv2betacontrol


@dataclass_json
@dataclass
class GoogleCloudRetailV2betaListControlsResponse:
    controls: Optional[List[googlecloudretailv2betacontrol.GoogleCloudRetailV2betaControl]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'controls' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
