from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudsecuritycenterv1muteconfig


@dataclass_json
@dataclass
class ListMuteConfigsResponse:
    mute_configs: Optional[List[googlecloudsecuritycenterv1muteconfig.GoogleCloudSecuritycenterV1MuteConfig]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'muteConfigs' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
