import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestCreateFieldRequestInput } from "./googleappsdrivelabelsv2betadeltaupdatelabelrequestcreatefieldrequest";
import { GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestCreateSelectionChoiceRequestInput } from "./googleappsdrivelabelsv2betadeltaupdatelabelrequestcreateselectionchoicerequest";
import { GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestDeleteFieldRequest } from "./googleappsdrivelabelsv2betadeltaupdatelabelrequestdeletefieldrequest";
import { GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestDeleteSelectionChoiceRequest } from "./googleappsdrivelabelsv2betadeltaupdatelabelrequestdeleteselectionchoicerequest";
import { GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestDisableFieldRequest } from "./googleappsdrivelabelsv2betadeltaupdatelabelrequestdisablefieldrequest";
import { GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestDisableSelectionChoiceRequest } from "./googleappsdrivelabelsv2betadeltaupdatelabelrequestdisableselectionchoicerequest";
import { GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestEnableFieldRequest } from "./googleappsdrivelabelsv2betadeltaupdatelabelrequestenablefieldrequest";
import { GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestEnableSelectionChoiceRequest } from "./googleappsdrivelabelsv2betadeltaupdatelabelrequestenableselectionchoicerequest";
import { GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestUpdateFieldPropertiesRequest } from "./googleappsdrivelabelsv2betadeltaupdatelabelrequestupdatefieldpropertiesrequest";
import { GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestUpdateFieldTypeRequestInput } from "./googleappsdrivelabelsv2betadeltaupdatelabelrequestupdatefieldtyperequest";
import { GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestUpdateLabelPropertiesRequest } from "./googleappsdrivelabelsv2betadeltaupdatelabelrequestupdatelabelpropertiesrequest";
import { GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestUpdateSelectionChoicePropertiesRequest } from "./googleappsdrivelabelsv2betadeltaupdatelabelrequestupdateselectionchoicepropertiesrequest";



// GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestRequestInput
/** 
 * A single kind of update to apply to a Label.
**/
export class GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestRequestInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createField" })
  createField?: GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestCreateFieldRequestInput;

  @SpeakeasyMetadata({ data: "json, name=createSelectionChoice" })
  createSelectionChoice?: GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestCreateSelectionChoiceRequestInput;

  @SpeakeasyMetadata({ data: "json, name=deleteField" })
  deleteField?: GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestDeleteFieldRequest;

  @SpeakeasyMetadata({ data: "json, name=deleteSelectionChoice" })
  deleteSelectionChoice?: GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestDeleteSelectionChoiceRequest;

  @SpeakeasyMetadata({ data: "json, name=disableField" })
  disableField?: GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestDisableFieldRequest;

  @SpeakeasyMetadata({ data: "json, name=disableSelectionChoice" })
  disableSelectionChoice?: GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestDisableSelectionChoiceRequest;

  @SpeakeasyMetadata({ data: "json, name=enableField" })
  enableField?: GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestEnableFieldRequest;

  @SpeakeasyMetadata({ data: "json, name=enableSelectionChoice" })
  enableSelectionChoice?: GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestEnableSelectionChoiceRequest;

  @SpeakeasyMetadata({ data: "json, name=updateField" })
  updateField?: GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestUpdateFieldPropertiesRequest;

  @SpeakeasyMetadata({ data: "json, name=updateFieldType" })
  updateFieldType?: GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestUpdateFieldTypeRequestInput;

  @SpeakeasyMetadata({ data: "json, name=updateLabel" })
  updateLabel?: GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestUpdateLabelPropertiesRequest;

  @SpeakeasyMetadata({ data: "json, name=updateSelectionChoiceProperties" })
  updateSelectionChoiceProperties?: GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestUpdateSelectionChoicePropertiesRequest;
}
