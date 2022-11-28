from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class SelectPsuAuthenticationMethod:
    r"""SelectPsuAuthenticationMethod
    Content of the body of a Select PSU authentication method request
    
    """
    
    authentication_method_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('authenticationMethodId') }})
    
