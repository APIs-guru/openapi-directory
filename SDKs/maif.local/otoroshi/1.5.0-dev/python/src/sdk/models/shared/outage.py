from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Outage:
    r"""Outage
    An outage by the Snow Monkey on a service
    """
    
    descriptor_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('descriptorId') }})
    descriptor_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('descriptorName') }})
    duration: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('duration') }})
    until: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('until') }})
    
