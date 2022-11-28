from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AuthorisationConfirmation:
    r"""AuthorisationConfirmation
    Content of the body of an authorisation confirmation request
    
    """
    
    confirmation_code: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('confirmationCode') }})
    
