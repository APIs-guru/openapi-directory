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
class GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoice:
    r"""GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoice
    Selection field choice.
    """
    
    applied_capabilities: Optional[GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceAppliedCapabilities] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appliedCapabilities') }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    creator: Optional[GoogleAppsDriveLabelsV2betaUserInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creator') }})
    disable_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disableTime') }})
    disabler: Optional[GoogleAppsDriveLabelsV2betaUserInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disabler') }})
    display_hints: Optional[GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceDisplayHints] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayHints') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    lifecycle: Optional[GoogleAppsDriveLabelsV2betaLifecycle] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lifecycle') }})
    lock_status: Optional[GoogleAppsDriveLabelsV2betaLockStatus] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lockStatus') }})
    properties: Optional[GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceProperties] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('properties') }})
    publish_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publishTime') }})
    publisher: Optional[GoogleAppsDriveLabelsV2betaUserInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publisher') }})
    schema_capabilities: Optional[GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceSchemaCapabilities] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('schemaCapabilities') }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    updater: Optional[GoogleAppsDriveLabelsV2betaUserInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updater') }})
    

@dataclass_json
@dataclass
class GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceInput:
    r"""GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceInput
    Selection field choice.
    """
    
    applied_capabilities: Optional[GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceAppliedCapabilities] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appliedCapabilities') }})
    creator: Optional[GoogleAppsDriveLabelsV2betaUserInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creator') }})
    disabler: Optional[GoogleAppsDriveLabelsV2betaUserInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disabler') }})
    display_hints: Optional[GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceDisplayHints] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayHints') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    lifecycle: Optional[GoogleAppsDriveLabelsV2betaLifecycleInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lifecycle') }})
    properties: Optional[GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceProperties] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('properties') }})
    publisher: Optional[GoogleAppsDriveLabelsV2betaUserInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publisher') }})
    schema_capabilities: Optional[GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceSchemaCapabilities] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('schemaCapabilities') }})
    updater: Optional[GoogleAppsDriveLabelsV2betaUserInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updater') }})
    
