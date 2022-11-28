from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class APIKey:
    r"""APIKey
    An Otoroshi Api Key. An Api Key is defined for a group of services to allow usage of the same Api Key for multiple services.
    """
    
    authorized_entities: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('authorizedEntities') }})
    client_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientId') }})
    client_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientName') }})
    client_secret: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientSecret') }})
    enabled: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    daily_quota: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dailyQuota') }})
    metadata: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    monthly_quota: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('monthlyQuota') }})
    throttling_quota: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('throttlingQuota') }})
    
