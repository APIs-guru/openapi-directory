from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import accountactivity
from . import accountriskverdict

class AccountDetailsAppLicensingVerdictEnum(str, Enum):
    UNKNOWN = "UNKNOWN"
    LICENSED = "LICENSED"
    UNLICENSED = "UNLICENSED"
    UNEVALUATED = "UNEVALUATED"


@dataclass_json
@dataclass
class AccountDetails:
    account_activity: Optional[accountactivity.AccountActivity] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accountActivity' }})
    account_risk_verdict: Optional[accountriskverdict.AccountRiskVerdict] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accountRiskVerdict' }})
    app_licensing_verdict: Optional[AccountDetailsAppLicensingVerdictEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'appLicensingVerdict' }})
    
