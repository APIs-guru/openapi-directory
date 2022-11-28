import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleAppsDriveLabelsV2betaListLimits } from "./googleappsdrivelabelsv2betalistlimits";



// GoogleAppsDriveLabelsV2betaUserLimits
/** 
 * Limits for Field.Type.USER.
**/
export class GoogleAppsDriveLabelsV2betaUserLimits extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=listLimits" })
  listLimits?: GoogleAppsDriveLabelsV2betaListLimits;
}
