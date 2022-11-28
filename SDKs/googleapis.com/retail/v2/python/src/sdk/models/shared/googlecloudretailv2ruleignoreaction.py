from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudRetailV2RuleIgnoreAction:
    r"""GoogleCloudRetailV2RuleIgnoreAction
    Prevents a term in the query from being used in search. Example: Don't search for \"shoddy\".
    """
    
    ignore_terms: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ignoreTerms') }})
    
