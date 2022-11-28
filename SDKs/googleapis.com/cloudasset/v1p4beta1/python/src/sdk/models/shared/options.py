from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Options:
    r"""Options
    Contains request options.
    """
    
    analyze_service_account_impersonation: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('analyzeServiceAccountImpersonation') }})
    expand_groups: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expandGroups') }})
    expand_resources: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expandResources') }})
    expand_roles: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expandRoles') }})
    output_group_edges: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('outputGroupEdges') }})
    output_resource_edges: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('outputResourceEdges') }})
    
