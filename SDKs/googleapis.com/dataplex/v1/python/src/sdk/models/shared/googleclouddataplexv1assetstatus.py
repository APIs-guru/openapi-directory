from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudDataplexV1AssetStatus:
    r"""GoogleCloudDataplexV1AssetStatus
    Aggregated status of the underlying assets of a lake or zone.
    """
    
    active_assets: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('activeAssets') }})
    security_policy_applying_assets: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('securityPolicyApplyingAssets') }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    
