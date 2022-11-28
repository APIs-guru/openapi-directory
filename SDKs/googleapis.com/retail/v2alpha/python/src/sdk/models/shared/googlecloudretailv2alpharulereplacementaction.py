from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudRetailV2alphaRuleReplacementAction:
    r"""GoogleCloudRetailV2alphaRuleReplacementAction
    Replaces a term in the query. Multiple replacement candidates can be specified. All `query_terms` will be replaced with the replacement term. Example: Replace \"gShoe\" with \"google shoe\".
    """
    
    query_terms: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('queryTerms') }})
    replacement_term: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('replacementTerm') }})
    term: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('term') }})
    
