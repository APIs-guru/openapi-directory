from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import bitbucketserverconfig


@dataclass_json
@dataclass
class ListBitbucketServerConfigsResponse:
    bitbucket_server_configs: Optional[List[bitbucketserverconfig.BitbucketServerConfig]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bitbucketServerConfigs' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
