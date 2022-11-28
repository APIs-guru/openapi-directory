from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class OrgPolicyResult:
    r"""OrgPolicyResult
    The organization policy result to the query.
    """
    
    consolidated_policy: Optional[AnalyzerOrgPolicy] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('consolidatedPolicy') }})
    policy_bundle: Optional[List[AnalyzerOrgPolicy]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('policyBundle') }})
    
