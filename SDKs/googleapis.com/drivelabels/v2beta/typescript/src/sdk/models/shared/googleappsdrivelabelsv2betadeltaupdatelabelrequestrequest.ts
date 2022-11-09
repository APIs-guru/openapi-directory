import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestCreateFieldRequest } from "./googleappsdrivelabelsv2betadeltaupdatelabelrequestcreatefieldrequest";
import { GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestCreateSelectionChoiceRequest } from "./googleappsdrivelabelsv2betadeltaupdatelabelrequestcreateselectionchoicerequest";
import { GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestDeleteFieldRequest } from "./googleappsdrivelabelsv2betadeltaupdatelabelrequestdeletefieldrequest";
import { GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestDeleteSelectionChoiceRequest } from "./googleappsdrivelabelsv2betadeltaupdatelabelrequestdeleteselectionchoicerequest";
import { GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestDisableFieldRequest } from "./googleappsdrivelabelsv2betadeltaupdatelabelrequestdisablefieldrequest";
import { GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestDisableSelectionChoiceRequest } from "./googleappsdrivelabelsv2betadeltaupdatelabelrequestdisableselectionchoicerequest";
import { GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestEnableFieldRequest } from "./googleappsdrivelabelsv2betadeltaupdatelabelrequestenablefieldrequest";
import { GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestEnableSelectionChoiceRequest } from "./googleappsdrivelabelsv2betadeltaupdatelabelrequestenableselectionchoicerequest";
import { GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestUpdateFieldPropertiesRequest } from "./googleappsdrivelabelsv2betadeltaupdatelabelrequestupdatefieldpropertiesrequest";
import { GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestUpdateFieldTypeRequest } from "./googleappsdrivelabelsv2betadeltaupdatelabelrequestupdatefieldtyperequest";
import { GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestUpdateLabelPropertiesRequest } from "./googleappsdrivelabelsv2betadeltaupdatelabelrequestupdatelabelpropertiesrequest";
import { GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestUpdateSelectionChoicePropertiesRequest } from "./googleappsdrivelabelsv2betadeltaupdatelabelrequestupdateselectionchoicepropertiesrequest";


// GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestRequest
/** 
 * A single kind of update to apply to a Label.
**/
export class GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=createField" })
  createField?: GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestCreateFieldRequest;

  @Metadata({ data: "json, name=createSelectionChoice" })
  createSelectionChoice?: GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestCreateSelectionChoiceRequest;

  @Metadata({ data: "json, name=deleteField" })
  deleteField?: GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestDeleteFieldRequest;

  @Metadata({ data: "json, name=deleteSelectionChoice" })
  deleteSelectionChoice?: GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestDeleteSelectionChoiceRequest;

  @Metadata({ data: "json, name=disableField" })
  disableField?: GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestDisableFieldRequest;

  @Metadata({ data: "json, name=disableSelectionChoice" })
  disableSelectionChoice?: GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestDisableSelectionChoiceRequest;

  @Metadata({ data: "json, name=enableField" })
  enableField?: GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestEnableFieldRequest;

  @Metadata({ data: "json, name=enableSelectionChoice" })
  enableSelectionChoice?: GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestEnableSelectionChoiceRequest;

  @Metadata({ data: "json, name=updateField" })
  updateField?: GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestUpdateFieldPropertiesRequest;

  @Metadata({ data: "json, name=updateFieldType" })
  updateFieldType?: GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestUpdateFieldTypeRequest;

  @Metadata({ data: "json, name=updateLabel" })
  updateLabel?: GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestUpdateLabelPropertiesRequest;

  @Metadata({ data: "json, name=updateSelectionChoiceProperties" })
  updateSelectionChoiceProperties?: GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestUpdateSelectionChoicePropertiesRequest;
}
