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
class GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestRequestInput:
    r"""GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestRequestInput
    A single kind of update to apply to a Label.
    """
    
    create_field: Optional[GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestCreateFieldRequestInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createField') }})
    create_selection_choice: Optional[GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestCreateSelectionChoiceRequestInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createSelectionChoice') }})
    delete_field: Optional[GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestDeleteFieldRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deleteField') }})
    delete_selection_choice: Optional[GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestDeleteSelectionChoiceRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deleteSelectionChoice') }})
    disable_field: Optional[GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestDisableFieldRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disableField') }})
    disable_selection_choice: Optional[GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestDisableSelectionChoiceRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disableSelectionChoice') }})
    enable_field: Optional[GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestEnableFieldRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enableField') }})
    enable_selection_choice: Optional[GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestEnableSelectionChoiceRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enableSelectionChoice') }})
    update_field: Optional[GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestUpdateFieldPropertiesRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateField') }})
    update_field_type: Optional[GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestUpdateFieldTypeRequestInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateFieldType') }})
    update_label: Optional[GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestUpdateLabelPropertiesRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateLabel') }})
    update_selection_choice_properties: Optional[GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestUpdateSelectionChoicePropertiesRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateSelectionChoiceProperties') }})
    
