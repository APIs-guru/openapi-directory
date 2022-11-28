from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class EditCustomerMatchMembersResponse:
    r"""EditCustomerMatchMembersResponse
    The response of FirstAndThirdPartyAudienceService.EditCustomerMatchMembers.
    """
    
    first_and_third_party_audience_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('firstAndThirdPartyAudienceId') }})
    
