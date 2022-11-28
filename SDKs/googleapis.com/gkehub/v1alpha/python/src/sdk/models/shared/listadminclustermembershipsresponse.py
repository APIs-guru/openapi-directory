from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListAdminClusterMembershipsResponse:
    r"""ListAdminClusterMembershipsResponse
    Response message for the `GkeHub.ListAdminClusterMemberships` method.
    """
    
    admin_cluster_memberships: Optional[List[Membership]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('adminClusterMemberships') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    unreachable: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unreachable') }})
    
