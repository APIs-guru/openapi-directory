from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowv2beta1version


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2beta1ListVersionsResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    versions: Optional[List[googleclouddialogflowv2beta1version.GoogleCloudDialogflowV2beta1Version]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'versions' }})
    
