from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GenerateConnectManifestResponse:
    r"""GenerateConnectManifestResponse
    GenerateConnectManifestResponse contains manifest information for installing/upgrading a Connect agent.
    """
    
    manifest: Optional[List[ConnectAgentResource]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('manifest') }})
    
