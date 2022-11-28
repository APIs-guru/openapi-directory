from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class TestingDetails:
    r"""TestingDetails
    Contains additional information generated for testing responses.
    """
    
    is_testing_response: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isTestingResponse') }})
    
