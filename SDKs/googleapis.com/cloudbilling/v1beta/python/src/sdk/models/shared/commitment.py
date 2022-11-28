from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Commitment:
    r"""Commitment
    Commitments give you the ability to pay a recurring fee in exchange for a benefit, such as a discount for your use. For example, this object might contain details of a [spend-based committed use discount (CUD)](https://cloud.google.com/docs/cuds#spend_based_commitments). Within a CostScenario, adding a commitment includes the cost of the commitment and any discounts.
    """
    
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    vm_resource_based_cud: Optional[VMResourceBasedCud] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vmResourceBasedCud') }})
    
