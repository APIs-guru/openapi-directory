from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ServiceType:
    r"""ServiceType
    A message describing a service type that the business offers.
    """
    
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    service_type_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceTypeId') }})
    
