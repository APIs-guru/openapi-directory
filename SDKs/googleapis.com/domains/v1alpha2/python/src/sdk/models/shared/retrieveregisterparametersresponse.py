from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import registerparameters


@dataclass_json
@dataclass
class RetrieveRegisterParametersResponse:
    register_parameters: Optional[registerparameters.RegisterParameters] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'registerParameters' }})
    
