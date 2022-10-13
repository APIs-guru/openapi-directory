from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ProjectBillingInfo:
    billing_account_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'billingAccountName' }})
    billing_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'billingEnabled' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    project_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'projectId' }})
    
