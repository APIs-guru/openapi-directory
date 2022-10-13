from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json

class GoogleCloudRecommenderV1beta1ReliabilityProjectionRisksEnum(str, Enum):
    RISK_TYPE_UNSPECIFIED = "RISK_TYPE_UNSPECIFIED"
    SERVICE_DISRUPTION = "SERVICE_DISRUPTION"
    DATA_LOSS = "DATA_LOSS"
    ACCESS_DENY = "ACCESS_DENY"


@dataclass_json
@dataclass
class GoogleCloudRecommenderV1beta1ReliabilityProjection:
    details: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'details' }})
    risks: Optional[List[GoogleCloudRecommenderV1beta1ReliabilityProjectionRisksEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'risks' }})
    
