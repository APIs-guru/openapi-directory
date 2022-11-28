from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListGithubEnterpriseConfigsResponse:
    r"""ListGithubEnterpriseConfigsResponse
    RPC response object returned by ListGithubEnterpriseConfigs RPC method.
    """
    
    configs: Optional[List[GitHubEnterpriseConfig]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('configs') }})
    
