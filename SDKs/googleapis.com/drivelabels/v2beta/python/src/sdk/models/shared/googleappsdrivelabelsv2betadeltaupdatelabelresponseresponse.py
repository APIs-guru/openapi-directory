from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from . import googleappsdrivelabelsv2betadeltaupdatelabelresponsecreatefieldresponse
from . import googleappsdrivelabelsv2betadeltaupdatelabelresponsecreateselectionchoiceresponse
from . import googleappsdrivelabelsv2betadeltaupdatelabelresponseupdatefieldpropertiesresponse
from . import googleappsdrivelabelsv2betadeltaupdatelabelresponseupdateselectionchoicepropertiesresponse


@dataclass_json
@dataclass
class GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseResponse:
    create_field: Optional[googleappsdrivelabelsv2betadeltaupdatelabelresponsecreatefieldresponse.GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseCreateFieldResponse] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createField' }})
    create_selection_choice: Optional[googleappsdrivelabelsv2betadeltaupdatelabelresponsecreateselectionchoiceresponse.GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseCreateSelectionChoiceResponse] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createSelectionChoice' }})
    delete_field: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deleteField' }})
    delete_selection_choice: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deleteSelectionChoice' }})
    disable_field: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disableField' }})
    disable_selection_choice: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disableSelectionChoice' }})
    enable_field: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enableField' }})
    enable_selection_choice: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enableSelectionChoice' }})
    update_field: Optional[googleappsdrivelabelsv2betadeltaupdatelabelresponseupdatefieldpropertiesresponse.GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseUpdateFieldPropertiesResponse] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateField' }})
    update_field_type: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateFieldType' }})
    update_label: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateLabel' }})
    update_selection_choice_properties: Optional[googleappsdrivelabelsv2betadeltaupdatelabelresponseupdateselectionchoicepropertiesresponse.GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseUpdateSelectionChoicePropertiesResponse] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateSelectionChoiceProperties' }})
    
