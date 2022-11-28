from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AnalyzerOrgPolicyConstraint:
    r"""AnalyzerOrgPolicyConstraint
    The organization policy constraint definition.
    """
    
    custom_constraint: Optional[GoogleCloudAssetV1CustomConstraint] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customConstraint') }})
    google_defined_constraint: Optional[GoogleCloudAssetV1Constraint] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('googleDefinedConstraint') }})
    
