from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleappsdrivelabelsv2betadeltaupdatelabelrequestcreatefieldrequest
from . import googleappsdrivelabelsv2betadeltaupdatelabelrequestcreateselectionchoicerequest
from . import googleappsdrivelabelsv2betadeltaupdatelabelrequestdeletefieldrequest
from . import googleappsdrivelabelsv2betadeltaupdatelabelrequestdeleteselectionchoicerequest
from . import googleappsdrivelabelsv2betadeltaupdatelabelrequestdisablefieldrequest
from . import googleappsdrivelabelsv2betadeltaupdatelabelrequestdisableselectionchoicerequest
from . import googleappsdrivelabelsv2betadeltaupdatelabelrequestenablefieldrequest
from . import googleappsdrivelabelsv2betadeltaupdatelabelrequestenableselectionchoicerequest
from . import googleappsdrivelabelsv2betadeltaupdatelabelrequestupdatefieldpropertiesrequest
from . import googleappsdrivelabelsv2betadeltaupdatelabelrequestupdatefieldtyperequest
from . import googleappsdrivelabelsv2betadeltaupdatelabelrequestupdatelabelpropertiesrequest
from . import googleappsdrivelabelsv2betadeltaupdatelabelrequestupdateselectionchoicepropertiesrequest


@dataclass_json
@dataclass
class GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestRequest:
    create_field: Optional[googleappsdrivelabelsv2betadeltaupdatelabelrequestcreatefieldrequest.GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestCreateFieldRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createField' }})
    create_selection_choice: Optional[googleappsdrivelabelsv2betadeltaupdatelabelrequestcreateselectionchoicerequest.GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestCreateSelectionChoiceRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createSelectionChoice' }})
    delete_field: Optional[googleappsdrivelabelsv2betadeltaupdatelabelrequestdeletefieldrequest.GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestDeleteFieldRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deleteField' }})
    delete_selection_choice: Optional[googleappsdrivelabelsv2betadeltaupdatelabelrequestdeleteselectionchoicerequest.GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestDeleteSelectionChoiceRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deleteSelectionChoice' }})
    disable_field: Optional[googleappsdrivelabelsv2betadeltaupdatelabelrequestdisablefieldrequest.GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestDisableFieldRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disableField' }})
    disable_selection_choice: Optional[googleappsdrivelabelsv2betadeltaupdatelabelrequestdisableselectionchoicerequest.GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestDisableSelectionChoiceRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disableSelectionChoice' }})
    enable_field: Optional[googleappsdrivelabelsv2betadeltaupdatelabelrequestenablefieldrequest.GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestEnableFieldRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enableField' }})
    enable_selection_choice: Optional[googleappsdrivelabelsv2betadeltaupdatelabelrequestenableselectionchoicerequest.GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestEnableSelectionChoiceRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enableSelectionChoice' }})
    update_field: Optional[googleappsdrivelabelsv2betadeltaupdatelabelrequestupdatefieldpropertiesrequest.GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestUpdateFieldPropertiesRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateField' }})
    update_field_type: Optional[googleappsdrivelabelsv2betadeltaupdatelabelrequestupdatefieldtyperequest.GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestUpdateFieldTypeRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateFieldType' }})
    update_label: Optional[googleappsdrivelabelsv2betadeltaupdatelabelrequestupdatelabelpropertiesrequest.GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestUpdateLabelPropertiesRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateLabel' }})
    update_selection_choice_properties: Optional[googleappsdrivelabelsv2betadeltaupdatelabelrequestupdateselectionchoicepropertiesrequest.GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestUpdateSelectionChoicePropertiesRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateSelectionChoiceProperties' }})
    
