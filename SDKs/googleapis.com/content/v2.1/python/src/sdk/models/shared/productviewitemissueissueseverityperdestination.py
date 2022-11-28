from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ProductViewItemIssueIssueSeverityPerDestination:
    r"""ProductViewItemIssueIssueSeverityPerDestination
    Issue severity for all affected regions in a destination.
    """
    
    demoted_countries: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('demotedCountries') }})
    destination: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destination') }})
    disapproved_countries: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disapprovedCountries') }})
    
