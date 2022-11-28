from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GcipSettings:
    r"""GcipSettings
    Allows customers to configure tenant_id for GCIP instance per-app.
    """
    
    login_page_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('loginPageUri') }})
    tenant_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tenantIds') }})
    
