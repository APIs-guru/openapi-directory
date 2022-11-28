from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class GooglePrivacyDlpV2FindingLikelihoodEnum(str, Enum):
    LIKELIHOOD_UNSPECIFIED = "LIKELIHOOD_UNSPECIFIED"
    VERY_UNLIKELY = "VERY_UNLIKELY"
    UNLIKELY = "UNLIKELY"
    POSSIBLE = "POSSIBLE"
    LIKELY = "LIKELY"
    VERY_LIKELY = "VERY_LIKELY"


@dataclass_json
@dataclass
class GooglePrivacyDlpV2Finding:
    r"""GooglePrivacyDlpV2Finding
    Represents a piece of potentially sensitive content.
    """
    
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    finding_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('findingId') }})
    info_type: Optional[GooglePrivacyDlpV2InfoType] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('infoType') }})
    job_create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobCreateTime') }})
    job_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobName') }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    likelihood: Optional[GooglePrivacyDlpV2FindingLikelihoodEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('likelihood') }})
    location: Optional[GooglePrivacyDlpV2Location] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    quote: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quote') }})
    quote_info: Optional[GooglePrivacyDlpV2QuoteInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quoteInfo') }})
    resource_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceName') }})
    trigger_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('triggerName') }})
    
