from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudrecaptchaenterprisev1relatedaccountgroup


@dataclass_json
@dataclass
class GoogleCloudRecaptchaenterpriseV1ListRelatedAccountGroupsResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    related_account_groups: Optional[List[googlecloudrecaptchaenterprisev1relatedaccountgroup.GoogleCloudRecaptchaenterpriseV1RelatedAccountGroup]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'relatedAccountGroups' }})
    
