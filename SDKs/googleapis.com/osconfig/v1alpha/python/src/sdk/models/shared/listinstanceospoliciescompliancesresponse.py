from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import instanceospoliciescompliance


@dataclass_json
@dataclass
class ListInstanceOsPoliciesCompliancesResponse:
    instance_os_policies_compliances: Optional[List[instanceospoliciescompliance.InstanceOsPoliciesCompliance]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instanceOsPoliciesCompliances' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
