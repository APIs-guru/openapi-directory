from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowcxv3beta1formparameter


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3beta1Form:
    parameters: Optional[List[googleclouddialogflowcxv3beta1formparameter.GoogleCloudDialogflowCxV3beta1FormParameter]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parameters' }})
    
