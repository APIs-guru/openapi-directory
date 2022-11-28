import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleAppsDriveLabelsV2betaDateLimits } from "./googleappsdrivelabelsv2betadatelimits";
import { GoogleAppsDriveLabelsV2betaIntegerLimits } from "./googleappsdrivelabelsv2betaintegerlimits";
import { GoogleAppsDriveLabelsV2betaLongTextLimits } from "./googleappsdrivelabelsv2betalongtextlimits";
import { GoogleAppsDriveLabelsV2betaSelectionLimits } from "./googleappsdrivelabelsv2betaselectionlimits";
import { GoogleAppsDriveLabelsV2betaTextLimits } from "./googleappsdrivelabelsv2betatextlimits";
import { GoogleAppsDriveLabelsV2betaUserLimits } from "./googleappsdrivelabelsv2betauserlimits";



// GoogleAppsDriveLabelsV2betaFieldLimits
/** 
 * Field constants governing the structure of a Field; such as, the maximum title length, minimum and maximum field values or length, etc.
**/
export class GoogleAppsDriveLabelsV2betaFieldLimits extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dateLimits" })
  dateLimits?: GoogleAppsDriveLabelsV2betaDateLimits;

  @SpeakeasyMetadata({ data: "json, name=integerLimits" })
  integerLimits?: GoogleAppsDriveLabelsV2betaIntegerLimits;

  @SpeakeasyMetadata({ data: "json, name=longTextLimits" })
  longTextLimits?: GoogleAppsDriveLabelsV2betaLongTextLimits;

  @SpeakeasyMetadata({ data: "json, name=maxDescriptionLength" })
  maxDescriptionLength?: number;

  @SpeakeasyMetadata({ data: "json, name=maxDisplayNameLength" })
  maxDisplayNameLength?: number;

  @SpeakeasyMetadata({ data: "json, name=maxIdLength" })
  maxIdLength?: number;

  @SpeakeasyMetadata({ data: "json, name=selectionLimits" })
  selectionLimits?: GoogleAppsDriveLabelsV2betaSelectionLimits;

  @SpeakeasyMetadata({ data: "json, name=textLimits" })
  textLimits?: GoogleAppsDriveLabelsV2betaTextLimits;

  @SpeakeasyMetadata({ data: "json, name=userLimits" })
  userLimits?: GoogleAppsDriveLabelsV2betaUserLimits;
}
