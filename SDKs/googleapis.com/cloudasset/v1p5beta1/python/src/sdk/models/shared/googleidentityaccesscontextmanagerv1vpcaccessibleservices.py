from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleIdentityAccesscontextmanagerV1VpcAccessibleServices:
    r"""GoogleIdentityAccesscontextmanagerV1VpcAccessibleServices
    Specifies how APIs are allowed to communicate within the Service Perimeter.
    """
    
    allowed_services: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowedServices') }})
    enable_restriction: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enableRestriction') }})
    
