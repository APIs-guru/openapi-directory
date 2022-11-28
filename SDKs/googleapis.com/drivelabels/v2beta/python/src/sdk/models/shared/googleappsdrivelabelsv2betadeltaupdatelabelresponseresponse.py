from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseResponse:
    r"""GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseResponse
    A single response from an update.
    """
    
    create_field: Optional[GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseCreateFieldResponse] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createField') }})
    create_selection_choice: Optional[GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseCreateSelectionChoiceResponse] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createSelectionChoice') }})
    delete_field: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deleteField') }})
    delete_selection_choice: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deleteSelectionChoice') }})
    disable_field: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disableField') }})
    disable_selection_choice: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disableSelectionChoice') }})
    enable_field: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enableField') }})
    enable_selection_choice: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enableSelectionChoice') }})
    update_field: Optional[GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseUpdateFieldPropertiesResponse] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateField') }})
    update_field_type: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateFieldType') }})
    update_label: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateLabel') }})
    update_selection_choice_properties: Optional[GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseUpdateSelectionChoicePropertiesResponse] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateSelectionChoiceProperties') }})
    
