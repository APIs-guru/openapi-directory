from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudrecaptchaenterprisev1key


@dataclass_json
@dataclass
class GoogleCloudRecaptchaenterpriseV1ListKeysResponse:
    keys: Optional[List[googlecloudrecaptchaenterprisev1key.GoogleCloudRecaptchaenterpriseV1Key]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'keys' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
