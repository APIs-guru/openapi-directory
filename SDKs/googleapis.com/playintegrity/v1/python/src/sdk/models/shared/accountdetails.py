from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class AccountDetailsAppLicensingVerdictEnum(str, Enum):
    UNKNOWN = "UNKNOWN"
    LICENSED = "LICENSED"
    UNLICENSED = "UNLICENSED"
    UNEVALUATED = "UNEVALUATED"


@dataclass_json
@dataclass
class AccountDetails:
    r"""AccountDetails
    Contains the account information such as the licensing status for the user in the scope.
    """
    
    account_activity: Optional[AccountActivity] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountActivity') }})
    app_licensing_verdict: Optional[AccountDetailsAppLicensingVerdictEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appLicensingVerdict') }})
    
