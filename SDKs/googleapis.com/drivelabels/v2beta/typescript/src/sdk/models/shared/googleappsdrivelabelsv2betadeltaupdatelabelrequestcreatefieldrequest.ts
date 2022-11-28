import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleAppsDriveLabelsV2betaFieldInput } from "./googleappsdrivelabelsv2betafield";



// GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestCreateFieldRequestInput
/** 
 * Request to create a Field within a Label.
**/
export class GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestCreateFieldRequestInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=field" })
  field?: GoogleAppsDriveLabelsV2betaFieldInput;
}
