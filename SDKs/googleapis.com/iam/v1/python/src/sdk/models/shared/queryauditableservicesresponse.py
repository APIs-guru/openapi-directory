from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class QueryAuditableServicesResponse:
    r"""QueryAuditableServicesResponse
    A response containing a list of auditable services for a resource.
    """
    
    services: Optional[List[AuditableService]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('services') }})
    
