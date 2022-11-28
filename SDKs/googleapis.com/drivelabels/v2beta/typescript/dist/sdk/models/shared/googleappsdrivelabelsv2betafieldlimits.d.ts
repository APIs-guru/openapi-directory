import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAppsDriveLabelsV2betaDateLimits } from "./googleappsdrivelabelsv2betadatelimits";
import { GoogleAppsDriveLabelsV2betaIntegerLimits } from "./googleappsdrivelabelsv2betaintegerlimits";
import { GoogleAppsDriveLabelsV2betaLongTextLimits } from "./googleappsdrivelabelsv2betalongtextlimits";
import { GoogleAppsDriveLabelsV2betaSelectionLimits } from "./googleappsdrivelabelsv2betaselectionlimits";
import { GoogleAppsDriveLabelsV2betaTextLimits } from "./googleappsdrivelabelsv2betatextlimits";
import { GoogleAppsDriveLabelsV2betaUserLimits } from "./googleappsdrivelabelsv2betauserlimits";
/**
 * Field constants governing the structure of a Field; such as, the maximum title length, minimum and maximum field values or length, etc.
**/
export declare class GoogleAppsDriveLabelsV2betaFieldLimits extends SpeakeasyBase {
    dateLimits?: GoogleAppsDriveLabelsV2betaDateLimits;
    integerLimits?: GoogleAppsDriveLabelsV2betaIntegerLimits;
    longTextLimits?: GoogleAppsDriveLabelsV2betaLongTextLimits;
    maxDescriptionLength?: number;
    maxDisplayNameLength?: number;
    maxIdLength?: number;
    selectionLimits?: GoogleAppsDriveLabelsV2betaSelectionLimits;
    textLimits?: GoogleAppsDriveLabelsV2betaTextLimits;
    userLimits?: GoogleAppsDriveLabelsV2betaUserLimits;
}
