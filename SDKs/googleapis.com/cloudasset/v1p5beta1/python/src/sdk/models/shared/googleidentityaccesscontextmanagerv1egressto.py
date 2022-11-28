from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleIdentityAccesscontextmanagerV1EgressTo:
    r"""GoogleIdentityAccesscontextmanagerV1EgressTo
    Defines the conditions under which an EgressPolicy matches a request. Conditions are based on information about the ApiOperation intended to be performed on the `resources` specified. Note that if the destination of the request is also protected by a ServicePerimeter, then that ServicePerimeter must have an IngressPolicy which allows access in order for this request to succeed. The request must match `operations` AND `resources` fields in order to be allowed egress out of the perimeter.
    """
    
    external_resources: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('externalResources') }})
    operations: Optional[List[GoogleIdentityAccesscontextmanagerV1APIOperation]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('operations') }})
    resources: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resources') }})
    
