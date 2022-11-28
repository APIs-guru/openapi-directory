from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AccountStatus:
    r"""AccountStatus
    The status of an account, i.e., information about its products, which is computed offline and not returned immediately at insertion time.
    """
    
    account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountId') }})
    account_level_issues: Optional[List[AccountStatusAccountLevelIssue]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountLevelIssues') }})
    data_quality_issues: Optional[List[AccountStatusDataQualityIssue]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataQualityIssues') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    products: Optional[List[AccountStatusProducts]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('products') }})
    website_claimed: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('websiteClaimed') }})
    
