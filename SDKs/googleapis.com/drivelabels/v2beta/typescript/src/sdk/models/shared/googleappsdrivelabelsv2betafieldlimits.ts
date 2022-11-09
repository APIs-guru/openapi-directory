import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
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
  @Metadata({ data: "json, name=dateLimits" })
  dateLimits?: GoogleAppsDriveLabelsV2betaDateLimits;

  @Metadata({ data: "json, name=integerLimits" })
  integerLimits?: GoogleAppsDriveLabelsV2betaIntegerLimits;

  @Metadata({ data: "json, name=longTextLimits" })
  longTextLimits?: GoogleAppsDriveLabelsV2betaLongTextLimits;

  @Metadata({ data: "json, name=maxDescriptionLength" })
  maxDescriptionLength?: number;

  @Metadata({ data: "json, name=maxDisplayNameLength" })
  maxDisplayNameLength?: number;

  @Metadata({ data: "json, name=maxIdLength" })
  maxIdLength?: number;

  @Metadata({ data: "json, name=selectionLimits" })
  selectionLimits?: GoogleAppsDriveLabelsV2betaSelectionLimits;

  @Metadata({ data: "json, name=textLimits" })
  textLimits?: GoogleAppsDriveLabelsV2betaTextLimits;

  @Metadata({ data: "json, name=userLimits" })
  userLimits?: GoogleAppsDriveLabelsV2betaUserLimits;
}
