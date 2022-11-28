import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleAppsDriveLabelsV2betaFieldProperties } from "./googleappsdrivelabelsv2betafieldproperties";



// GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestUpdateFieldPropertiesRequest
/** 
 * Request to update Field properties.
**/
export class GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestUpdateFieldPropertiesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=properties" })
  properties?: GoogleAppsDriveLabelsV2betaFieldProperties;

  @SpeakeasyMetadata({ data: "json, name=updateMask" })
  updateMask?: string;
}
