from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudrunv2service


@dataclass_json
@dataclass
class GoogleCloudRunV2ListServicesResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    services: Optional[List[googlecloudrunv2service.GoogleCloudRunV2Service]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'services' }})
    
