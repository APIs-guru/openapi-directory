from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowcxv3validationmessage


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3FlowValidationResult:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateTime' }})
    validation_messages: Optional[List[googleclouddialogflowcxv3validationmessage.GoogleCloudDialogflowCxV3ValidationMessage]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'validationMessages' }})
    
