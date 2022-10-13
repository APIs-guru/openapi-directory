from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import productviewitemissueissueseverityperdestination

class ProductViewItemIssueItemIssueSeverityAggregatedSeverityEnum(str, Enum):
    AGGREGATED_ISSUE_SEVERITY_UNSPECIFIED = "AGGREGATED_ISSUE_SEVERITY_UNSPECIFIED"
    DISAPPROVED = "DISAPPROVED"
    DEMOTED = "DEMOTED"
    PENDING = "PENDING"


@dataclass_json
@dataclass
class ProductViewItemIssueItemIssueSeverity:
    aggregated_severity: Optional[ProductViewItemIssueItemIssueSeverityAggregatedSeverityEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'aggregatedSeverity' }})
    severity_per_destination: Optional[List[productviewitemissueissueseverityperdestination.ProductViewItemIssueIssueSeverityPerDestination]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'severityPerDestination' }})
    
