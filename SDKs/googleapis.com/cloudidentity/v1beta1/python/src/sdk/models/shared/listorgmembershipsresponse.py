from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListOrgMembershipsResponse:
    r"""ListOrgMembershipsResponse
    The response message for OrgMembershipsService.ListOrgMemberships.
    """
    
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    org_memberships: Optional[List[OrgMembership]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('orgMemberships') }})
    
