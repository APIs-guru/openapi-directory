from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import deliveryerror
from . import ipreputation
from . import feedbackloop

class TrafficStatsDomainReputationEnum(str, Enum):
    REPUTATION_CATEGORY_UNSPECIFIED = "REPUTATION_CATEGORY_UNSPECIFIED"
    HIGH = "HIGH"
    MEDIUM = "MEDIUM"
    LOW = "LOW"
    BAD = "BAD"


@dataclass_json
@dataclass
class TrafficStats:
    delivery_errors: Optional[List[deliveryerror.DeliveryError]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deliveryErrors' }})
    dkim_success_ratio: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dkimSuccessRatio' }})
    dmarc_success_ratio: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dmarcSuccessRatio' }})
    domain_reputation: Optional[TrafficStatsDomainReputationEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'domainReputation' }})
    inbound_encryption_ratio: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inboundEncryptionRatio' }})
    ip_reputations: Optional[List[ipreputation.IPReputation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ipReputations' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    outbound_encryption_ratio: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'outboundEncryptionRatio' }})
    spammy_feedback_loops: Optional[List[feedbackloop.FeedbackLoop]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'spammyFeedbackLoops' }})
    spf_success_ratio: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'spfSuccessRatio' }})
    user_reported_spam_ratio: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userReportedSpamRatio' }})
    
