from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowcxv3beta1page


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3beta1ListPagesResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    pages: Optional[List[googleclouddialogflowcxv3beta1page.GoogleCloudDialogflowCxV3beta1Page]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pages' }})
    
