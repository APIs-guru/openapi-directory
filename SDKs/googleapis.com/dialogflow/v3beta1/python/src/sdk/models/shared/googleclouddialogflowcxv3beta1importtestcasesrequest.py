from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3beta1ImportTestCasesRequest:
    content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'content' }})
    gcs_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gcsUri' }})
    
