from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import productviewitemissueitemissuetype
from . import productviewitemissueitemissueseverity

class ProductViewItemIssueResolutionEnum(str, Enum):
    UNKNOWN = "UNKNOWN"
    MERCHANT_ACTION = "MERCHANT_ACTION"
    PENDING_PROCESSING = "PENDING_PROCESSING"


@dataclass_json
@dataclass
class ProductViewItemIssue:
    issue_type: Optional[productviewitemissueitemissuetype.ProductViewItemIssueItemIssueType] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'issueType' }})
    resolution: Optional[ProductViewItemIssueResolutionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resolution' }})
    severity: Optional[productviewitemissueitemissueseverity.ProductViewItemIssueItemIssueSeverity] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'severity' }})
    
