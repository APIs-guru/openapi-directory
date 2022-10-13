from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddatacatalogv1beta1policytag


@dataclass_json
@dataclass
class GoogleCloudDatacatalogV1beta1ListPolicyTagsResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    policy_tags: Optional[List[googleclouddatacatalogv1beta1policytag.GoogleCloudDatacatalogV1beta1PolicyTag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'policyTags' }})
    
