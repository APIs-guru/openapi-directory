from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowcxv3formparameter


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3Form:
    parameters: Optional[List[googleclouddialogflowcxv3formparameter.GoogleCloudDialogflowCxV3FormParameter]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parameters' }})
    
