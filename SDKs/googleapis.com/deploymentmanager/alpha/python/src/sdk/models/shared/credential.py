from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import basicauth
from . import serviceaccount


@dataclass_json
@dataclass
class Credential:
    basic_auth: Optional[basicauth.BasicAuth] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'basicAuth' }})
    service_account: Optional[serviceaccount.ServiceAccount] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceAccount' }})
    use_project_default: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'useProjectDefault' }})
    
