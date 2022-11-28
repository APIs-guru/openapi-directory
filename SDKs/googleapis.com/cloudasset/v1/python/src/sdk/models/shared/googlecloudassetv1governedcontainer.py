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
class GoogleCloudAssetV1GovernedContainer:
    r"""GoogleCloudAssetV1GovernedContainer
    The organization/folder/project resource governed by organization policies of AnalyzeOrgPolicyGovernedContainersRequest.constraint.
    """
    
    consolidated_policy: Optional[AnalyzerOrgPolicy] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('consolidatedPolicy') }})
    full_resource_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fullResourceName') }})
    parent: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parent') }})
    policy_bundle: Optional[List[AnalyzerOrgPolicy]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('policyBundle') }})
    
