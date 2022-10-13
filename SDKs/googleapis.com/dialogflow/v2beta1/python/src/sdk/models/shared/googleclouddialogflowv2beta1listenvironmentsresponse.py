from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowv2beta1environment


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2beta1ListEnvironmentsResponse:
    environments: Optional[List[googleclouddialogflowv2beta1environment.GoogleCloudDialogflowV2beta1Environment]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'environments' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
