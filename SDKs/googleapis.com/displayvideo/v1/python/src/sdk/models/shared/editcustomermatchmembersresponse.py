from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class EditCustomerMatchMembersResponse:
    first_and_third_party_audience_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'firstAndThirdPartyAudienceId' }})
    
