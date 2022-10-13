from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleCloudRetailV2betaRuleOnewaySynonymsAction:
    oneway_terms: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'onewayTerms' }})
    query_terms: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'queryTerms' }})
    synonyms: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'synonyms' }})
    
