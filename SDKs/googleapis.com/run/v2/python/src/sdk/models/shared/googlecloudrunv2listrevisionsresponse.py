from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudrunv2revision


@dataclass_json
@dataclass
class GoogleCloudRunV2ListRevisionsResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    revisions: Optional[List[googlecloudrunv2revision.GoogleCloudRunV2Revision]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'revisions' }})
    
