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
class GoogleFactcheckingFactchecktoolsV1alpha1Claim:
    r"""GoogleFactcheckingFactchecktoolsV1alpha1Claim
    Information about the claim.
    """
    
    claim_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('claimDate') }})
    claim_review: Optional[List[GoogleFactcheckingFactchecktoolsV1alpha1ClaimReview]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('claimReview') }})
    claimant: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('claimant') }})
    text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('text') }})
    
