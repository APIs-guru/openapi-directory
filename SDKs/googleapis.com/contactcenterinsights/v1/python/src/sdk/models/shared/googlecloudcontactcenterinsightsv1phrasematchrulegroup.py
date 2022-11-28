from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class GoogleCloudContactcenterinsightsV1PhraseMatchRuleGroupTypeEnum(str, Enum):
    PHRASE_MATCH_RULE_GROUP_TYPE_UNSPECIFIED = "PHRASE_MATCH_RULE_GROUP_TYPE_UNSPECIFIED"
    ALL_OF = "ALL_OF"
    ANY_OF = "ANY_OF"


@dataclass_json
@dataclass
class GoogleCloudContactcenterinsightsV1PhraseMatchRuleGroup:
    r"""GoogleCloudContactcenterinsightsV1PhraseMatchRuleGroup
    A message representing a rule in the phrase matcher.
    """
    
    phrase_match_rules: Optional[List[GoogleCloudContactcenterinsightsV1PhraseMatchRule]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phraseMatchRules') }})
    type: Optional[GoogleCloudContactcenterinsightsV1PhraseMatchRuleGroupTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
