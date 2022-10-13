from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json

class AttributePropagationSettingsOutputCredentialsEnum(str, Enum):
    OUTPUT_CREDENTIALS_UNSPECIFIED = "OUTPUT_CREDENTIALS_UNSPECIFIED"
    HEADER = "HEADER"
    JWT = "JWT"
    RCTOKEN = "RCTOKEN"


@dataclass_json
@dataclass
class AttributePropagationSettings:
    enable: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enable' }})
    expression: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expression' }})
    output_credentials: Optional[List[AttributePropagationSettingsOutputCredentialsEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'outputCredentials' }})
    
