from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class InstancesListServerCasResponse:
    r"""InstancesListServerCasResponse
    Instances ListServerCas response.
    """
    
    active_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('activeVersion') }})
    certs: Optional[List[SslCert]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('certs') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    
