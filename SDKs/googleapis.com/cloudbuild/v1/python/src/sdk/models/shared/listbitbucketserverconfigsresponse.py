from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListBitbucketServerConfigsResponse:
    r"""ListBitbucketServerConfigsResponse
    RPC response object returned by ListBitbucketServerConfigs RPC method.
    """
    
    bitbucket_server_configs: Optional[List[BitbucketServerConfig]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bitbucketServerConfigs') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
