from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class EndpointVbcExtension:
    r"""EndpointVbcExtension
    Connect to a VBC extension
    """
    
    extension: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('extension') }})
    type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
