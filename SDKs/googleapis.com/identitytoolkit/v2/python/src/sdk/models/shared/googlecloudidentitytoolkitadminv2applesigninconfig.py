from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudIdentitytoolkitAdminV2AppleSignInConfig:
    r"""GoogleCloudIdentitytoolkitAdminV2AppleSignInConfig
    Additional config for SignInWithApple.
    """
    
    bundle_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bundleIds') }})
    code_flow_config: Optional[GoogleCloudIdentitytoolkitAdminV2CodeFlowConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('codeFlowConfig') }})
    
