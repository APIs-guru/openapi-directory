from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudcontactcenterinsightsv1phrasematchrule

class GoogleCloudContactcenterinsightsV1PhraseMatchRuleGroupTypeEnum(str, Enum):
    PHRASE_MATCH_RULE_GROUP_TYPE_UNSPECIFIED = "PHRASE_MATCH_RULE_GROUP_TYPE_UNSPECIFIED"
    ALL_OF = "ALL_OF"
    ANY_OF = "ANY_OF"


@dataclass_json
@dataclass
class GoogleCloudContactcenterinsightsV1PhraseMatchRuleGroup:
    phrase_match_rules: Optional[List[googlecloudcontactcenterinsightsv1phrasematchrule.GoogleCloudContactcenterinsightsV1PhraseMatchRule]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'phraseMatchRules' }})
    type: Optional[GoogleCloudContactcenterinsightsV1PhraseMatchRuleGroupTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
