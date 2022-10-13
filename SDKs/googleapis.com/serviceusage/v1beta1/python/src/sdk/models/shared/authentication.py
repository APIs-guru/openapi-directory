from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import authprovider
from . import authenticationrule


@dataclass_json
@dataclass
class Authentication:
    providers: Optional[List[authprovider.AuthProvider]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'providers' }})
    rules: Optional[List[authenticationrule.AuthenticationRule]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rules' }})
    
