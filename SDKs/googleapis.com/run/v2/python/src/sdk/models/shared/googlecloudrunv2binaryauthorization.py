from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleCloudRunV2BinaryAuthorization:
    breakglass_justification: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'breakglassJustification' }})
    use_default: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'useDefault' }})
    
