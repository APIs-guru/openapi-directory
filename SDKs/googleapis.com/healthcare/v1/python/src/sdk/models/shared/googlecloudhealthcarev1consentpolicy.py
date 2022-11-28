from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudHealthcareV1ConsentPolicy:
    r"""GoogleCloudHealthcareV1ConsentPolicy
    Represents a user's consent in terms of the resources that can be accessed and under what conditions.
    """
    
    authorization_rule: Optional[Expr] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authorizationRule') }})
    resource_attributes: Optional[List[Attribute]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceAttributes') }})
    
