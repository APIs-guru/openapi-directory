from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudRecaptchaenterpriseV1ListKeysResponse:
    r"""GoogleCloudRecaptchaenterpriseV1ListKeysResponse
    Response to request to list keys in a project.
    """
    
    keys: Optional[List[GoogleCloudRecaptchaenterpriseV1Key]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('keys') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
