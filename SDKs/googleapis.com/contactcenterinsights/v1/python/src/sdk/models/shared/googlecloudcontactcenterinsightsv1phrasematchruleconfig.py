from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudContactcenterinsightsV1PhraseMatchRuleConfig:
    r"""GoogleCloudContactcenterinsightsV1PhraseMatchRuleConfig
    Configuration information of a phrase match rule.
    """
    
    exact_match_config: Optional[GoogleCloudContactcenterinsightsV1ExactMatchConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exactMatchConfig') }})
    
