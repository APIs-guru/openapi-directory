from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ProductViewItemIssueIssueSeverityPerDestination:
    demoted_countries: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'demotedCountries' }})
    destination: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destination' }})
    disapproved_countries: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disapprovedCountries' }})
    
