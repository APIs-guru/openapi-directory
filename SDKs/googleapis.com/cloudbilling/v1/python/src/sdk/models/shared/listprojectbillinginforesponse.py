from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import projectbillinginfo


@dataclass_json
@dataclass
class ListProjectBillingInfoResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    project_billing_info: Optional[List[projectbillinginfo.ProjectBillingInfo]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'projectBillingInfo' }})
    
