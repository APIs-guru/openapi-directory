from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class ProductViewItemIssueItemIssueSeverityAggregatedSeverityEnum(str, Enum):
    AGGREGATED_ISSUE_SEVERITY_UNSPECIFIED = "AGGREGATED_ISSUE_SEVERITY_UNSPECIFIED"
    DISAPPROVED = "DISAPPROVED"
    DEMOTED = "DEMOTED"
    PENDING = "PENDING"


@dataclass_json
@dataclass
class ProductViewItemIssueItemIssueSeverity:
    r"""ProductViewItemIssueItemIssueSeverity
    Severity of an issue per destination in a region, and aggregated severity.
    """
    
    aggregated_severity: Optional[ProductViewItemIssueItemIssueSeverityAggregatedSeverityEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('aggregatedSeverity') }})
    severity_per_destination: Optional[List[ProductViewItemIssueIssueSeverityPerDestination]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('severityPerDestination') }})
    
