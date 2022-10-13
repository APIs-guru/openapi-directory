from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import googleprivacydlpv2infotype
from . import googleprivacydlpv2location
from . import googleprivacydlpv2quoteinfo

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
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    finding_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'findingId' }})
    info_type: Optional[googleprivacydlpv2infotype.GooglePrivacyDlpV2InfoType] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'infoType' }})
    job_create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jobCreateTime' }})
    job_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jobName' }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    likelihood: Optional[GooglePrivacyDlpV2FindingLikelihoodEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'likelihood' }})
    location: Optional[googleprivacydlpv2location.GooglePrivacyDlpV2Location] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    quote: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'quote' }})
    quote_info: Optional[googleprivacydlpv2quoteinfo.GooglePrivacyDlpV2QuoteInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'quoteInfo' }})
    resource_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceName' }})
    trigger_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'triggerName' }})
    
