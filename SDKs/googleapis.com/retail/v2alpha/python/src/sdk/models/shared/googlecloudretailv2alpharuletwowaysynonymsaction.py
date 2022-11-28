from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudRetailV2alphaRuleTwowaySynonymsAction:
    r"""GoogleCloudRetailV2alphaRuleTwowaySynonymsAction
    Creates a set of terms that will be treated as synonyms of each other. Example: synonyms of \"sneakers\" and \"shoes\": * \"sneakers\" will use a synonym of \"shoes\". * \"shoes\" will use a synonym of \"sneakers\".
    """
    
    synonyms: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('synonyms') }})
    
