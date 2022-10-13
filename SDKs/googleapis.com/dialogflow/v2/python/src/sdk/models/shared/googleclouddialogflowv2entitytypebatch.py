from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowv2entitytype


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2EntityTypeBatch:
    entity_types: Optional[List[googleclouddialogflowv2entitytype.GoogleCloudDialogflowV2EntityType]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entityTypes' }})
    
