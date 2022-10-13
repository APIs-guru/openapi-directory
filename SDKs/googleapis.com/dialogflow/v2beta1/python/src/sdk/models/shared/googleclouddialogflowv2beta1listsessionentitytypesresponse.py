from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowv2beta1sessionentitytype


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2beta1ListSessionEntityTypesResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    session_entity_types: Optional[List[googleclouddialogflowv2beta1sessionentitytype.GoogleCloudDialogflowV2beta1SessionEntityType]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sessionEntityTypes' }})
    
