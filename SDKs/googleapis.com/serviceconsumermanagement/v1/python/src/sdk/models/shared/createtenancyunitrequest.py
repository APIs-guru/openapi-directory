from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CreateTenancyUnitRequest:
    r"""CreateTenancyUnitRequest
    Request to create a tenancy unit for a service consumer of a managed service.
    """
    
    tenancy_unit_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tenancyUnitId') }})
    
