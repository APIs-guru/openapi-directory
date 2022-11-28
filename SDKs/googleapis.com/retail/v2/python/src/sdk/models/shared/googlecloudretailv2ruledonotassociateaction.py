from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudRetailV2RuleDoNotAssociateAction:
    r"""GoogleCloudRetailV2RuleDoNotAssociateAction
    Prevents `query_term` from being associated with specified terms during search. Example: Don't associate \"gShoe\" and \"cheap\".
    """
    
    do_not_associate_terms: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('doNotAssociateTerms') }})
    query_terms: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('queryTerms') }})
    terms: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('terms') }})
    
