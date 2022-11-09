import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleAppsDriveLabelsV2betaField } from "./googleappsdrivelabelsv2betafield";


// GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestCreateFieldRequest
/** 
 * Request to create a Field within a Label.
**/
export class GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestCreateFieldRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=field" })
  field?: GoogleAppsDriveLabelsV2betaField;
}
