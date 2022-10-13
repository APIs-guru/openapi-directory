from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudmlv1__version


@dataclass_json
@dataclass
class GoogleCloudMlV1ListVersionsResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    versions: Optional[List[googlecloudmlv1__version.GoogleCloudMlV1Version]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'versions' }})
    
