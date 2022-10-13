from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class AccountRiskVerdictRiskEnum(str, Enum):
    RISK_UNSPECIFIED = "RISK_UNSPECIFIED"
    UNEVALUATED = "UNEVALUATED"
    HIGHER = "HIGHER"
    UNKNOWN = "UNKNOWN"
    LOWER = "LOWER"
    LOWEST = "LOWEST"

class AccountRiskVerdictRiskLevelEnum(str, Enum):
    RISK_LEVEL_UNSPECIFIED = "RISK_LEVEL_UNSPECIFIED"
    RISK_LEVEL_UNEVALUATED = "RISK_LEVEL_UNEVALUATED"
    RISK_LEVEL_RISK = "RISK_LEVEL_RISK"
    RISK_LEVEL_UNKNOWN = "RISK_LEVEL_UNKNOWN"
    RISK_LEVEL_LOW_RISK = "RISK_LEVEL_LOW_RISK"
    RISK_LEVEL_LOWEST_RISK = "RISK_LEVEL_LOWEST_RISK"


@dataclass_json
@dataclass
class AccountRiskVerdict:
    risk: Optional[AccountRiskVerdictRiskEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'risk' }})
    risk_level: Optional[AccountRiskVerdictRiskLevelEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'riskLevel' }})
    
