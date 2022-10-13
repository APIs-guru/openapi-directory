from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googlecloudcontactcenterinsightsv1exactmatchconfig


@dataclass_json
@dataclass
class GoogleCloudContactcenterinsightsV1PhraseMatchRuleConfig:
    exact_match_config: Optional[googlecloudcontactcenterinsightsv1exactmatchconfig.GoogleCloudContactcenterinsightsV1ExactMatchConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'exactMatchConfig' }})
    
