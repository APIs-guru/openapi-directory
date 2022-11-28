from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class GoogleCloudContactcenterinsightsV1PhraseMatcherRoleMatchEnum(str, Enum):
    ROLE_UNSPECIFIED = "ROLE_UNSPECIFIED"
    HUMAN_AGENT = "HUMAN_AGENT"
    AUTOMATED_AGENT = "AUTOMATED_AGENT"
    END_USER = "END_USER"
    ANY_AGENT = "ANY_AGENT"

class GoogleCloudContactcenterinsightsV1PhraseMatcherTypeEnum(str, Enum):
    PHRASE_MATCHER_TYPE_UNSPECIFIED = "PHRASE_MATCHER_TYPE_UNSPECIFIED"
    ALL_OF = "ALL_OF"
    ANY_OF = "ANY_OF"


@dataclass_json
@dataclass
class GoogleCloudContactcenterinsightsV1PhraseMatcher:
    r"""GoogleCloudContactcenterinsightsV1PhraseMatcher
    The phrase matcher resource.
    """
    
    activation_update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('activationUpdateTime') }})
    active: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('active') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    phrase_match_rule_groups: Optional[List[GoogleCloudContactcenterinsightsV1PhraseMatchRuleGroup]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phraseMatchRuleGroups') }})
    revision_create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('revisionCreateTime') }})
    revision_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('revisionId') }})
    role_match: Optional[GoogleCloudContactcenterinsightsV1PhraseMatcherRoleMatchEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('roleMatch') }})
    type: Optional[GoogleCloudContactcenterinsightsV1PhraseMatcherTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    version_tag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('versionTag') }})
    

@dataclass_json
@dataclass
class GoogleCloudContactcenterinsightsV1PhraseMatcherInput:
    r"""GoogleCloudContactcenterinsightsV1PhraseMatcherInput
    The phrase matcher resource.
    """
    
    active: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('active') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    phrase_match_rule_groups: Optional[List[GoogleCloudContactcenterinsightsV1PhraseMatchRuleGroup]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phraseMatchRuleGroups') }})
    role_match: Optional[GoogleCloudContactcenterinsightsV1PhraseMatcherRoleMatchEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('roleMatch') }})
    type: Optional[GoogleCloudContactcenterinsightsV1PhraseMatcherTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    version_tag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('versionTag') }})
    
