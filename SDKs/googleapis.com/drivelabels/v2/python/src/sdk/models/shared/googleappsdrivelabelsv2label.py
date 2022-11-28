from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class GoogleAppsDriveLabelsV2LabelLabelTypeEnum(str, Enum):
    LABEL_TYPE_UNSPECIFIED = "LABEL_TYPE_UNSPECIFIED"
    SHARED = "SHARED"
    ADMIN = "ADMIN"


@dataclass_json
@dataclass
class GoogleAppsDriveLabelsV2Label:
    r"""GoogleAppsDriveLabelsV2Label
    A label defines a taxonomy that can be applied to Drive items in order to organize and search across items. Labels can be simple strings, or can contain fields that describe additional metadata that can be further used to organize and search Drive items.
    """
    
    applied_capabilities: Optional[GoogleAppsDriveLabelsV2LabelAppliedCapabilities] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appliedCapabilities') }})
    applied_label_policy: Optional[GoogleAppsDriveLabelsV2LabelAppliedLabelPolicy] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appliedLabelPolicy') }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    creator: Optional[GoogleAppsDriveLabelsV2UserInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creator') }})
    disable_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disableTime') }})
    disabler: Optional[GoogleAppsDriveLabelsV2UserInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disabler') }})
    display_hints: Optional[GoogleAppsDriveLabelsV2LabelDisplayHints] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayHints') }})
    fields: Optional[List[GoogleAppsDriveLabelsV2Field]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fields') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    label_type: Optional[GoogleAppsDriveLabelsV2LabelLabelTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labelType') }})
    learn_more_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('learnMoreUri') }})
    lifecycle: Optional[GoogleAppsDriveLabelsV2Lifecycle] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lifecycle') }})
    lock_status: Optional[GoogleAppsDriveLabelsV2LockStatus] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lockStatus') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    properties: Optional[GoogleAppsDriveLabelsV2LabelProperties] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('properties') }})
    publish_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publishTime') }})
    publisher: Optional[GoogleAppsDriveLabelsV2UserInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publisher') }})
    revision_create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('revisionCreateTime') }})
    revision_creator: Optional[GoogleAppsDriveLabelsV2UserInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('revisionCreator') }})
    revision_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('revisionId') }})
    schema_capabilities: Optional[GoogleAppsDriveLabelsV2LabelSchemaCapabilities] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('schemaCapabilities') }})
    
