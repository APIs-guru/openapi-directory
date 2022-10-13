from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowcxv3environment


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3LookupEnvironmentHistoryResponse:
    environments: Optional[List[googleclouddialogflowcxv3environment.GoogleCloudDialogflowCxV3Environment]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'environments' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
