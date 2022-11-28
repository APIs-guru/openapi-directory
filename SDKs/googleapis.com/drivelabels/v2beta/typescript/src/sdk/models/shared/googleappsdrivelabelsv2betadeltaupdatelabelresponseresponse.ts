import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseCreateFieldResponse } from "./googleappsdrivelabelsv2betadeltaupdatelabelresponsecreatefieldresponse";
import { GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseCreateSelectionChoiceResponse } from "./googleappsdrivelabelsv2betadeltaupdatelabelresponsecreateselectionchoiceresponse";
import { GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseUpdateFieldPropertiesResponse } from "./googleappsdrivelabelsv2betadeltaupdatelabelresponseupdatefieldpropertiesresponse";
import { GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseUpdateSelectionChoicePropertiesResponse } from "./googleappsdrivelabelsv2betadeltaupdatelabelresponseupdateselectionchoicepropertiesresponse";



// GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseResponse
/** 
 * A single response from an update.
**/
export class GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createField" })
  createField?: GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseCreateFieldResponse;

  @SpeakeasyMetadata({ data: "json, name=createSelectionChoice" })
  createSelectionChoice?: GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseCreateSelectionChoiceResponse;

  @SpeakeasyMetadata({ data: "json, name=deleteField" })
  deleteField?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=deleteSelectionChoice" })
  deleteSelectionChoice?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=disableField" })
  disableField?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=disableSelectionChoice" })
  disableSelectionChoice?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=enableField" })
  enableField?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=enableSelectionChoice" })
  enableSelectionChoice?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=updateField" })
  updateField?: GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseUpdateFieldPropertiesResponse;

  @SpeakeasyMetadata({ data: "json, name=updateFieldType" })
  updateFieldType?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=updateLabel" })
  updateLabel?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=updateSelectionChoiceProperties" })
  updateSelectionChoiceProperties?: GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseUpdateSelectionChoicePropertiesResponse;
}
