from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowv2beta1document


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2beta1ListDocumentsResponse:
    documents: Optional[List[googleclouddialogflowv2beta1document.GoogleCloudDialogflowV2beta1Document]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'documents' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
