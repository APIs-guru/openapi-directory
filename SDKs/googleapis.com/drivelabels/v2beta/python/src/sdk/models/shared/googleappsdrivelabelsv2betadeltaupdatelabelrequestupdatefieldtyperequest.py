from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleappsdrivelabelsv2betafielddateoptions
from . import googleappsdrivelabelsv2betafieldintegeroptions
from . import googleappsdrivelabelsv2betafieldlongtextoptions
from . import googleappsdrivelabelsv2betafieldselectionoptions
from . import googleappsdrivelabelsv2betafieldtextoptions
from . import googleappsdrivelabelsv2betafielduseroptions


@dataclass_json
@dataclass
class GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestUpdateFieldTypeRequest:
    date_options: Optional[googleappsdrivelabelsv2betafielddateoptions.GoogleAppsDriveLabelsV2betaFieldDateOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dateOptions' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    integer_options: Optional[googleappsdrivelabelsv2betafieldintegeroptions.GoogleAppsDriveLabelsV2betaFieldIntegerOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'integerOptions' }})
    long_text_options: Optional[googleappsdrivelabelsv2betafieldlongtextoptions.GoogleAppsDriveLabelsV2betaFieldLongTextOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'longTextOptions' }})
    selection_options: Optional[googleappsdrivelabelsv2betafieldselectionoptions.GoogleAppsDriveLabelsV2betaFieldSelectionOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'selectionOptions' }})
    text_options: Optional[googleappsdrivelabelsv2betafieldtextoptions.GoogleAppsDriveLabelsV2betaFieldTextOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'textOptions' }})
    update_mask: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateMask' }})
    user_options: Optional[googleappsdrivelabelsv2betafielduseroptions.GoogleAppsDriveLabelsV2betaFieldUserOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userOptions' }})
    
