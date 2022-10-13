from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googlecloudcontactcenterinsightsv1phrasematchruleconfig


@dataclass_json
@dataclass
class GoogleCloudContactcenterinsightsV1PhraseMatchRule:
    config: Optional[googlecloudcontactcenterinsightsv1phrasematchruleconfig.GoogleCloudContactcenterinsightsV1PhraseMatchRuleConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'config' }})
    negated: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'negated' }})
    query: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'query' }})
    
