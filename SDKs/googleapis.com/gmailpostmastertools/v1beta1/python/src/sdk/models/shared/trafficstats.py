from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class TrafficStatsDomainReputationEnum(str, Enum):
    REPUTATION_CATEGORY_UNSPECIFIED = "REPUTATION_CATEGORY_UNSPECIFIED"
    HIGH = "HIGH"
    MEDIUM = "MEDIUM"
    LOW = "LOW"
    BAD = "BAD"


@dataclass_json
@dataclass
class TrafficStats:
    r"""TrafficStats
    Email traffic statistics pertaining to a specific date.
    """
    
    delivery_errors: Optional[List[DeliveryError]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deliveryErrors') }})
    dkim_success_ratio: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dkimSuccessRatio') }})
    dmarc_success_ratio: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dmarcSuccessRatio') }})
    domain_reputation: Optional[TrafficStatsDomainReputationEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('domainReputation') }})
    inbound_encryption_ratio: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inboundEncryptionRatio') }})
    ip_reputations: Optional[List[IPReputation]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ipReputations') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    outbound_encryption_ratio: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('outboundEncryptionRatio') }})
    spammy_feedback_loops: Optional[List[FeedbackLoop]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('spammyFeedbackLoops') }})
    spf_success_ratio: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('spfSuccessRatio') }})
    user_reported_spam_ratio: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userReportedSpamRatio') }})
    
