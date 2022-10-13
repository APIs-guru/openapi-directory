from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowv2beta1entitytype


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2beta1EntityTypeBatch:
    entity_types: Optional[List[googleclouddialogflowv2beta1entitytype.GoogleCloudDialogflowV2beta1EntityType]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entityTypes' }})
    
