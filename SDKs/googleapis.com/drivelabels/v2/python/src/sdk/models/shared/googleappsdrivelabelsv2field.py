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
class GoogleAppsDriveLabelsV2Field:
    r"""GoogleAppsDriveLabelsV2Field
    Defines a field that has a display name, data type, and other configuration options. This field defines the kind of metadata that may be set on a Drive item.
    """
    
    applied_capabilities: Optional[GoogleAppsDriveLabelsV2FieldAppliedCapabilities] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appliedCapabilities') }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    creator: Optional[GoogleAppsDriveLabelsV2UserInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creator') }})
    date_options: Optional[GoogleAppsDriveLabelsV2FieldDateOptions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dateOptions') }})
    disable_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disableTime') }})
    disabler: Optional[GoogleAppsDriveLabelsV2UserInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disabler') }})
    display_hints: Optional[GoogleAppsDriveLabelsV2FieldDisplayHints] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayHints') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    integer_options: Optional[GoogleAppsDriveLabelsV2FieldIntegerOptions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('integerOptions') }})
    lifecycle: Optional[GoogleAppsDriveLabelsV2Lifecycle] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lifecycle') }})
    lock_status: Optional[GoogleAppsDriveLabelsV2LockStatus] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lockStatus') }})
    properties: Optional[GoogleAppsDriveLabelsV2FieldProperties] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('properties') }})
    publisher: Optional[GoogleAppsDriveLabelsV2UserInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publisher') }})
    query_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('queryKey') }})
    schema_capabilities: Optional[GoogleAppsDriveLabelsV2FieldSchemaCapabilities] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('schemaCapabilities') }})
    selection_options: Optional[GoogleAppsDriveLabelsV2FieldSelectionOptions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('selectionOptions') }})
    text_options: Optional[GoogleAppsDriveLabelsV2FieldTextOptions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('textOptions') }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    updater: Optional[GoogleAppsDriveLabelsV2UserInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updater') }})
    user_options: Optional[GoogleAppsDriveLabelsV2FieldUserOptions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userOptions') }})
    
