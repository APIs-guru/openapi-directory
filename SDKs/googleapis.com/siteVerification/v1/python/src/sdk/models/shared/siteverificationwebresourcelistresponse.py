from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import siteverificationwebresourceresource


@dataclass_json
@dataclass
class SiteVerificationWebResourceListResponse:
    items: Optional[List[siteverificationwebresourceresource.SiteVerificationWebResourceResource]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'items' }})
    
