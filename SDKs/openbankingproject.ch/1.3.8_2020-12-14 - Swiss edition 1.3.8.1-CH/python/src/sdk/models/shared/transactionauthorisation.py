from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class TransactionAuthorisation:
    r"""TransactionAuthorisation
    Content of the body of a transaction authorisation request
    
    """
    
    sca_authentication_data: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('scaAuthenticationData') }})
    
