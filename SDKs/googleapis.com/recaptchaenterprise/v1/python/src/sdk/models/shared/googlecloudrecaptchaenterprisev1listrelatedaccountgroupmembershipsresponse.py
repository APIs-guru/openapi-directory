from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudrecaptchaenterprisev1relatedaccountgroupmembership


@dataclass_json
@dataclass
class GoogleCloudRecaptchaenterpriseV1ListRelatedAccountGroupMembershipsResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    related_account_group_memberships: Optional[List[googlecloudrecaptchaenterprisev1relatedaccountgroupmembership.GoogleCloudRecaptchaenterpriseV1RelatedAccountGroupMembership]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'relatedAccountGroupMemberships' }})
    
