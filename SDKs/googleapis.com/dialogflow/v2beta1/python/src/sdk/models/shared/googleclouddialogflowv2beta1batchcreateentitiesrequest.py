from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowv2beta1entitytypeentity


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2beta1BatchCreateEntitiesRequest:
    entities: Optional[List[googleclouddialogflowv2beta1entitytypeentity.GoogleCloudDialogflowV2beta1EntityTypeEntity]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entities' }})
    language_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'languageCode' }})
    
