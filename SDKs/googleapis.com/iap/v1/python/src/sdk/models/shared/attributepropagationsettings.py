from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class AttributePropagationSettingsOutputCredentialsEnum(str, Enum):
    OUTPUT_CREDENTIALS_UNSPECIFIED = "OUTPUT_CREDENTIALS_UNSPECIFIED"
    HEADER = "HEADER"
    JWT = "JWT"
    RCTOKEN = "RCTOKEN"


@dataclass_json
@dataclass
class AttributePropagationSettings:
    r"""AttributePropagationSettings
    Configuration for propagating attributes to customer applications protected by IAP. These attributes may be SAML attributes from a 3rd party IdP, or potentially other sources in the future.
    """
    
    enable: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enable') }})
    expression: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expression') }})
    output_credentials: Optional[List[AttributePropagationSettingsOutputCredentialsEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('outputCredentials') }})
    
