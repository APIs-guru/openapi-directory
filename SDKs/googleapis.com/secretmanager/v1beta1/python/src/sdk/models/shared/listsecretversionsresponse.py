from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListSecretVersionsResponse:
    r"""ListSecretVersionsResponse
    Response message for SecretManagerService.ListSecretVersions.
    """
    
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    total_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalSize') }})
    versions: Optional[List[SecretVersion]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('versions') }})
    
