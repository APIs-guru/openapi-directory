from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ResolveServiceRequest:
    r"""ResolveServiceRequest
    The request message for LookupService.ResolveService. Looks up a service by its name, returns the service and its endpoints.
    """
    
    endpoint_filter: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endpointFilter') }})
    max_endpoints: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxEndpoints') }})
    
