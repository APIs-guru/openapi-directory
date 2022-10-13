from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowv2environment


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2ListEnvironmentsResponse:
    environments: Optional[List[googleclouddialogflowv2environment.GoogleCloudDialogflowV2Environment]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'environments' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
