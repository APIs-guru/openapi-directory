from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowcxv3sessionentitytype


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3ListSessionEntityTypesResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    session_entity_types: Optional[List[googleclouddialogflowcxv3sessionentitytype.GoogleCloudDialogflowCxV3SessionEntityType]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sessionEntityTypes' }})
    
