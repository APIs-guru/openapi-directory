from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class SoftwareRecipeStepInstallMsi:
    allowed_exit_codes: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allowedExitCodes' }})
    artifact_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'artifactId' }})
    flags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'flags' }})
    
