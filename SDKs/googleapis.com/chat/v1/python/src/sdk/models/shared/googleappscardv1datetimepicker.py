from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import googleappscardv1action

class GoogleAppsCardV1DateTimePickerTypeEnum(str, Enum):
    DATE_AND_TIME = "DATE_AND_TIME"
    DATE_ONLY = "DATE_ONLY"
    TIME_ONLY = "TIME_ONLY"


@dataclass_json
@dataclass
class GoogleAppsCardV1DateTimePicker:
    label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'label' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    on_change_action: Optional[googleappscardv1action.GoogleAppsCardV1Action] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'onChangeAction' }})
    timezone_offset_date: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timezoneOffsetDate' }})
    type: Optional[GoogleAppsCardV1DateTimePickerTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    value_ms_epoch: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'valueMsEpoch' }})
    
