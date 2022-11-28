from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Target:
    r"""Target
    A Target is where an HTTP call will be forwarded in the end from a service domain
    """
    
    host: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('host') }})
    scheme: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('scheme') }})
    
