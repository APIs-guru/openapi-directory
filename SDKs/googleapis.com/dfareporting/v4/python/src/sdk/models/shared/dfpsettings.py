from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DfpSettings:
    r"""DfpSettings
    Google Ad Manager Settings
    """
    
    dfp_network_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dfpNetworkCode') }})
    dfp_network_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dfpNetworkName') }})
    programmatic_placement_accepted: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('programmaticPlacementAccepted') }})
    pub_paid_placement_accepted: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pubPaidPlacementAccepted') }})
    publisher_portal_only: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publisherPortalOnly') }})
    
