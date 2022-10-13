from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import postalcode


@dataclass_json
@dataclass
class PostalCodesListResponse:
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    postal_codes: Optional[List[postalcode.PostalCode]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'postalCodes' }})
    
