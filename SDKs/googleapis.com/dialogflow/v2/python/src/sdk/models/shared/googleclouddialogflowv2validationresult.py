from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowv2validationerror


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2ValidationResult:
    validation_errors: Optional[List[googleclouddialogflowv2validationerror.GoogleCloudDialogflowV2ValidationError]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'validationErrors' }})
    
