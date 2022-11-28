from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GclbTarget:
    r"""GclbTarget
    Describes a Target Proxy that uses this Certificate Map.
    """
    
    ip_configs: Optional[List[IPConfig]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ipConfigs') }})
    target_https_proxy: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetHttpsProxy') }})
    target_ssl_proxy: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetSslProxy') }})
    
