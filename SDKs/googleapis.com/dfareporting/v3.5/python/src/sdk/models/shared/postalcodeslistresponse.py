from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PostalCodesListResponse:
    r"""PostalCodesListResponse
    Postal Code List Response
    """
    
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    postal_codes: Optional[List[PostalCode]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('postalCodes') }})
    
