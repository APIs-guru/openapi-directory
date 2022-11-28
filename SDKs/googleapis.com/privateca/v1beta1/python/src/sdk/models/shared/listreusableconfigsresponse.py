from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListReusableConfigsResponse:
    r"""ListReusableConfigsResponse
    Response message for CertificateAuthorityService.ListReusableConfigs.
    """
    
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    reusable_configs: Optional[List[ReusableConfig]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reusableConfigs') }})
    unreachable: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unreachable') }})
    
