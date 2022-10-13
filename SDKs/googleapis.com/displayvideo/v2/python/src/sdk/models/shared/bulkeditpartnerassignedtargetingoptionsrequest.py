from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import createassignedtargetingoptionsrequest
from . import deleteassignedtargetingoptionsrequest


@dataclass_json
@dataclass
class BulkEditPartnerAssignedTargetingOptionsRequest:
    create_requests: Optional[List[createassignedtargetingoptionsrequest.CreateAssignedTargetingOptionsRequest]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createRequests' }})
    delete_requests: Optional[List[deleteassignedtargetingoptionsrequest.DeleteAssignedTargetingOptionsRequest]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deleteRequests' }})
    
