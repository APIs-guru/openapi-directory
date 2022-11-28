import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleAppsDriveLabelsV2betaLabelProperties } from "./googleappsdrivelabelsv2betalabelproperties";



// GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestUpdateLabelPropertiesRequest
/** 
 * Updates basic properties of a Label.
**/
export class GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestUpdateLabelPropertiesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=properties" })
  properties?: GoogleAppsDriveLabelsV2betaLabelProperties;

  @SpeakeasyMetadata({ data: "json, name=updateMask" })
  updateMask?: string;
}
