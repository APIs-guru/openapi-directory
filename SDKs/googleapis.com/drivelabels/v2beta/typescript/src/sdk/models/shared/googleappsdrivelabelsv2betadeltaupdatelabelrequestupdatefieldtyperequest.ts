import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleAppsDriveLabelsV2betaFieldDateOptionsInput } from "./googleappsdrivelabelsv2betafielddateoptions";
import { GoogleAppsDriveLabelsV2betaFieldSelectionOptionsInput } from "./googleappsdrivelabelsv2betafieldselectionoptions";
import { GoogleAppsDriveLabelsV2betaFieldUserOptions } from "./googleappsdrivelabelsv2betafielduseroptions";



// GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestUpdateFieldTypeRequestInput
/** 
 * Request to change the type of a Field.
**/
export class GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestUpdateFieldTypeRequestInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dateOptions" })
  dateOptions?: GoogleAppsDriveLabelsV2betaFieldDateOptionsInput;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=selectionOptions" })
  selectionOptions?: GoogleAppsDriveLabelsV2betaFieldSelectionOptionsInput;

  @SpeakeasyMetadata({ data: "json, name=updateMask" })
  updateMask?: string;

  @SpeakeasyMetadata({ data: "json, name=userOptions" })
  userOptions?: GoogleAppsDriveLabelsV2betaFieldUserOptions;
}
