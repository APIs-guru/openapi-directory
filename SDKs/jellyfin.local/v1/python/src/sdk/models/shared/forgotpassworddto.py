from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ForgotPasswordDto:
    r"""ForgotPasswordDto
    Forgot Password request body DTO.
    """
    
    entered_username: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('EnteredUsername') }})
    
