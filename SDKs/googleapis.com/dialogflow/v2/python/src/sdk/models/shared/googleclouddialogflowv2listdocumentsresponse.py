from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowv2document


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2ListDocumentsResponse:
    documents: Optional[List[googleclouddialogflowv2document.GoogleCloudDialogflowV2Document]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'documents' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
