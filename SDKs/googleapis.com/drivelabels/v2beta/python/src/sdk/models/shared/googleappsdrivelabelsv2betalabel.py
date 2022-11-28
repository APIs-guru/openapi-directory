from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class GoogleAppsDriveLabelsV2betaLabelLabelTypeEnum(str, Enum):
    LABEL_TYPE_UNSPECIFIED = "LABEL_TYPE_UNSPECIFIED"
    SHARED = "SHARED"
    ADMIN = "ADMIN"


@dataclass_json
@dataclass
class GoogleAppsDriveLabelsV2betaLabelInput:
    r"""GoogleAppsDriveLabelsV2betaLabelInput
    A label defines a taxonomy that can be applied to Drive items in order to organize and search across items. Labels can be simple strings, or can contain fields that describe additional metadata that can be further used to organize and search Drive items.
    """
    
    applied_capabilities: Optional[GoogleAppsDriveLabelsV2betaLabelAppliedCapabilities] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appliedCapabilities') }})
    applied_label_policy: Optional[GoogleAppsDriveLabelsV2betaLabelAppliedLabelPolicy] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appliedLabelPolicy') }})
    creator: Optional[GoogleAppsDriveLabelsV2betaUserInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creator') }})
    disabler: Optional[GoogleAppsDriveLabelsV2betaUserInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disabler') }})
    display_hints: Optional[GoogleAppsDriveLabelsV2betaLabelDisplayHints] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayHints') }})
    fields: Optional[List[GoogleAppsDriveLabelsV2betaFieldInput]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fields') }})
    label_type: Optional[GoogleAppsDriveLabelsV2betaLabelLabelTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labelType') }})
    learn_more_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('learnMoreUri') }})
    lifecycle: Optional[GoogleAppsDriveLabelsV2betaLifecycleInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lifecycle') }})
    properties: Optional[GoogleAppsDriveLabelsV2betaLabelProperties] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('properties') }})
    publisher: Optional[GoogleAppsDriveLabelsV2betaUserInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publisher') }})
    revision_creator: Optional[GoogleAppsDriveLabelsV2betaUserInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('revisionCreator') }})
    schema_capabilities: Optional[GoogleAppsDriveLabelsV2betaLabelSchemaCapabilities] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('schemaCapabilities') }})
    

@dataclass_json
@dataclass
class GoogleAppsDriveLabelsV2betaLabel:
    r"""GoogleAppsDriveLabelsV2betaLabel
    A label defines a taxonomy that can be applied to Drive items in order to organize and search across items. Labels can be simple strings, or can contain fields that describe additional metadata that can be further used to organize and search Drive items.
    """
    
    applied_capabilities: Optional[GoogleAppsDriveLabelsV2betaLabelAppliedCapabilities] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appliedCapabilities') }})
    applied_label_policy: Optional[GoogleAppsDriveLabelsV2betaLabelAppliedLabelPolicy] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appliedLabelPolicy') }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    creator: Optional[GoogleAppsDriveLabelsV2betaUserInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creator') }})
    disable_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disableTime') }})
    disabler: Optional[GoogleAppsDriveLabelsV2betaUserInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disabler') }})
    display_hints: Optional[GoogleAppsDriveLabelsV2betaLabelDisplayHints] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayHints') }})
    fields: Optional[List[GoogleAppsDriveLabelsV2betaField]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fields') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    label_type: Optional[GoogleAppsDriveLabelsV2betaLabelLabelTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labelType') }})
    learn_more_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('learnMoreUri') }})
    lifecycle: Optional[GoogleAppsDriveLabelsV2betaLifecycle] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lifecycle') }})
    lock_status: Optional[GoogleAppsDriveLabelsV2betaLockStatus] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lockStatus') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    properties: Optional[GoogleAppsDriveLabelsV2betaLabelProperties] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('properties') }})
    publish_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publishTime') }})
    publisher: Optional[GoogleAppsDriveLabelsV2betaUserInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publisher') }})
    revision_create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('revisionCreateTime') }})
    revision_creator: Optional[GoogleAppsDriveLabelsV2betaUserInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('revisionCreator') }})
    revision_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('revisionId') }})
    schema_capabilities: Optional[GoogleAppsDriveLabelsV2betaLabelSchemaCapabilities] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('schemaCapabilities') }})
    
