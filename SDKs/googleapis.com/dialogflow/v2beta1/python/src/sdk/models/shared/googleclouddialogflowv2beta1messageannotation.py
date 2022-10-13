from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowv2beta1annotatedmessagepart


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2beta1MessageAnnotation:
    contain_entities: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'containEntities' }})
    parts: Optional[List[googleclouddialogflowv2beta1annotatedmessagepart.GoogleCloudDialogflowV2beta1AnnotatedMessagePart]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parts' }})
    
