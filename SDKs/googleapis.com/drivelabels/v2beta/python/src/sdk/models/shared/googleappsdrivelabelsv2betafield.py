from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleAppsDriveLabelsV2betaFieldInput:
    r"""GoogleAppsDriveLabelsV2betaFieldInput
    Defines a field that has a display name, data type, and other configuration options. This field defines the kind of metadata that may be set on a Drive item.
    """
    
    applied_capabilities: Optional[GoogleAppsDriveLabelsV2betaFieldAppliedCapabilities] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appliedCapabilities') }})
    creator: Optional[GoogleAppsDriveLabelsV2betaUserInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creator') }})
    date_options: Optional[GoogleAppsDriveLabelsV2betaFieldDateOptionsInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dateOptions') }})
    disabler: Optional[GoogleAppsDriveLabelsV2betaUserInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disabler') }})
    display_hints: Optional[GoogleAppsDriveLabelsV2betaFieldDisplayHints] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayHints') }})
    lifecycle: Optional[GoogleAppsDriveLabelsV2betaLifecycleInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lifecycle') }})
    properties: Optional[GoogleAppsDriveLabelsV2betaFieldProperties] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('properties') }})
    publisher: Optional[GoogleAppsDriveLabelsV2betaUserInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publisher') }})
    schema_capabilities: Optional[GoogleAppsDriveLabelsV2betaFieldSchemaCapabilities] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('schemaCapabilities') }})
    selection_options: Optional[GoogleAppsDriveLabelsV2betaFieldSelectionOptionsInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('selectionOptions') }})
    updater: Optional[GoogleAppsDriveLabelsV2betaUserInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updater') }})
    user_options: Optional[GoogleAppsDriveLabelsV2betaFieldUserOptions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userOptions') }})
    

@dataclass_json
@dataclass
class GoogleAppsDriveLabelsV2betaField:
    r"""GoogleAppsDriveLabelsV2betaField
    Defines a field that has a display name, data type, and other configuration options. This field defines the kind of metadata that may be set on a Drive item.
    """
    
    applied_capabilities: Optional[GoogleAppsDriveLabelsV2betaFieldAppliedCapabilities] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appliedCapabilities') }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    creator: Optional[GoogleAppsDriveLabelsV2betaUserInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creator') }})
    date_options: Optional[GoogleAppsDriveLabelsV2betaFieldDateOptions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dateOptions') }})
    disable_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disableTime') }})
    disabler: Optional[GoogleAppsDriveLabelsV2betaUserInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disabler') }})
    display_hints: Optional[GoogleAppsDriveLabelsV2betaFieldDisplayHints] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayHints') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    integer_options: Optional[GoogleAppsDriveLabelsV2betaFieldIntegerOptions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('integerOptions') }})
    lifecycle: Optional[GoogleAppsDriveLabelsV2betaLifecycle] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lifecycle') }})
    lock_status: Optional[GoogleAppsDriveLabelsV2betaLockStatus] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lockStatus') }})
    properties: Optional[GoogleAppsDriveLabelsV2betaFieldProperties] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('properties') }})
    publisher: Optional[GoogleAppsDriveLabelsV2betaUserInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publisher') }})
    query_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('queryKey') }})
    schema_capabilities: Optional[GoogleAppsDriveLabelsV2betaFieldSchemaCapabilities] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('schemaCapabilities') }})
    selection_options: Optional[GoogleAppsDriveLabelsV2betaFieldSelectionOptions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('selectionOptions') }})
    text_options: Optional[GoogleAppsDriveLabelsV2betaFieldTextOptions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('textOptions') }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    updater: Optional[GoogleAppsDriveLabelsV2betaUserInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updater') }})
    user_options: Optional[GoogleAppsDriveLabelsV2betaFieldUserOptions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userOptions') }})
    
