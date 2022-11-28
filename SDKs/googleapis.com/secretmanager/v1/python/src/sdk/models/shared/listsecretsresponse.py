from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListSecretsResponse:
    r"""ListSecretsResponse
    Response message for SecretManagerService.ListSecrets.
    """
    
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    secrets: Optional[List[Secret]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secrets') }})
    total_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalSize') }})
    
