from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudRetailV2betaRuleOnewaySynonymsAction:
    r"""GoogleCloudRetailV2betaRuleOnewaySynonymsAction
    Maps a set of terms to a set of synonyms. Set of synonyms will be treated as synonyms of each query term only. `query_terms` will not be treated as synonyms of each other. Example: \"sneakers\" will use a synonym of \"shoes\". \"shoes\" will not use a synonym of \"sneakers\".
    """
    
    oneway_terms: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('onewayTerms') }})
    query_terms: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('queryTerms') }})
    synonyms: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('synonyms') }})
    
