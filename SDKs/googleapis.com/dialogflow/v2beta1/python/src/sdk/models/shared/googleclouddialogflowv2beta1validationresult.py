from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowv2beta1validationerror


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2beta1ValidationResult:
    validation_errors: Optional[List[googleclouddialogflowv2beta1validationerror.GoogleCloudDialogflowV2beta1ValidationError]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'validationErrors' }})
    
