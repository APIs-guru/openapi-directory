from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class QuotaBucket:
    r"""QuotaBucket
    A quota bucket is a quota provisioning unit for a specific set of dimensions.
    """
    
    admin_override: Optional[QuotaOverride] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('adminOverride') }})
    consumer_override: Optional[QuotaOverride] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('consumerOverride') }})
    default_limit: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultLimit') }})
    dimensions: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dimensions') }})
    effective_limit: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('effectiveLimit') }})
    producer_override: Optional[QuotaOverride] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('producerOverride') }})
    
