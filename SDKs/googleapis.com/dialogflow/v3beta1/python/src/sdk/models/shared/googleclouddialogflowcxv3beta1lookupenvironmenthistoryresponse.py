from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowcxv3beta1environment


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3beta1LookupEnvironmentHistoryResponse:
    environments: Optional[List[googleclouddialogflowcxv3beta1environment.GoogleCloudDialogflowCxV3beta1Environment]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'environments' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
