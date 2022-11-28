from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class ProductViewItemIssueResolutionEnum(str, Enum):
    UNKNOWN = "UNKNOWN"
    MERCHANT_ACTION = "MERCHANT_ACTION"
    PENDING_PROCESSING = "PENDING_PROCESSING"


@dataclass_json
@dataclass
class ProductViewItemIssue:
    r"""ProductViewItemIssue
    Item issue associated with the product.
    """
    
    issue_type: Optional[ProductViewItemIssueItemIssueType] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('issueType') }})
    resolution: Optional[ProductViewItemIssueResolutionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resolution') }})
    severity: Optional[ProductViewItemIssueItemIssueSeverity] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('severity') }})
    
