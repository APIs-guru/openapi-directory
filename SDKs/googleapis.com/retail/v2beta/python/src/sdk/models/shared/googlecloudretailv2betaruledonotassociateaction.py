from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleCloudRetailV2betaRuleDoNotAssociateAction:
    do_not_associate_terms: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'doNotAssociateTerms' }})
    query_terms: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'queryTerms' }})
    terms: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'terms' }})
    
