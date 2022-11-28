from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudChannelV1AssociationInfo:
    r"""GoogleCloudChannelV1AssociationInfo
    Association links that an entitlement has to other entitlements.
    """
    
    base_entitlement: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('baseEntitlement') }})
    
