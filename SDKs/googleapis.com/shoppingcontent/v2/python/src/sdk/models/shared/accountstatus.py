from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import accountstatusaccountlevelissue
from . import accountstatusdataqualityissue
from . import accountstatusproducts


@dataclass_json
@dataclass
class AccountStatus:
    account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accountId' }})
    account_level_issues: Optional[List[accountstatusaccountlevelissue.AccountStatusAccountLevelIssue]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accountLevelIssues' }})
    data_quality_issues: Optional[List[accountstatusdataqualityissue.AccountStatusDataQualityIssue]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataQualityIssues' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    products: Optional[List[accountstatusproducts.AccountStatusProducts]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'products' }})
    website_claimed: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'websiteClaimed' }})
    
