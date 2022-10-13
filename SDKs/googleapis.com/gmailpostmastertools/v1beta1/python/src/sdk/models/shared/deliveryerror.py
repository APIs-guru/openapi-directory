from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class DeliveryErrorErrorClassEnum(str, Enum):
    DELIVERY_ERROR_CLASS_UNSPECIFIED = "DELIVERY_ERROR_CLASS_UNSPECIFIED"
    PERMANENT_ERROR = "PERMANENT_ERROR"
    TEMPORARY_ERROR = "TEMPORARY_ERROR"

class DeliveryErrorErrorTypeEnum(str, Enum):
    DELIVERY_ERROR_TYPE_UNSPECIFIED = "DELIVERY_ERROR_TYPE_UNSPECIFIED"
    RATE_LIMIT_EXCEEDED = "RATE_LIMIT_EXCEEDED"
    SUSPECTED_SPAM = "SUSPECTED_SPAM"
    CONTENT_SPAMMY = "CONTENT_SPAMMY"
    BAD_ATTACHMENT = "BAD_ATTACHMENT"
    BAD_DMARC_POLICY = "BAD_DMARC_POLICY"
    LOW_IP_REPUTATION = "LOW_IP_REPUTATION"
    LOW_DOMAIN_REPUTATION = "LOW_DOMAIN_REPUTATION"
    IP_IN_RBL = "IP_IN_RBL"
    DOMAIN_IN_RBL = "DOMAIN_IN_RBL"
    BAD_PTR_RECORD = "BAD_PTR_RECORD"


@dataclass_json
@dataclass
class DeliveryError:
    error_class: Optional[DeliveryErrorErrorClassEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errorClass' }})
    error_ratio: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errorRatio' }})
    error_type: Optional[DeliveryErrorErrorTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errorType' }})
    
