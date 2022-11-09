import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleAppsDriveLabelsV2betaLabelProperties } from "./googleappsdrivelabelsv2betalabelproperties";


// GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestUpdateLabelPropertiesRequest
/** 
 * Updates basic properties of a Label.
**/
export class GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestUpdateLabelPropertiesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=properties" })
  properties?: GoogleAppsDriveLabelsV2betaLabelProperties;

  @Metadata({ data: "json, name=updateMask" })
  updateMask?: string;
}
