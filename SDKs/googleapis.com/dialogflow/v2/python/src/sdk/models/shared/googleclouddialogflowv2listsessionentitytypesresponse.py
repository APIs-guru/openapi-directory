from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowv2sessionentitytype


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2ListSessionEntityTypesResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    session_entity_types: Optional[List[googleclouddialogflowv2sessionentitytype.GoogleCloudDialogflowV2SessionEntityType]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sessionEntityTypes' }})
    
