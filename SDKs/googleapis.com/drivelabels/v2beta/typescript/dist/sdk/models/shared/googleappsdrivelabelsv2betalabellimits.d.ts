import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAppsDriveLabelsV2betaFieldLimits } from "./googleappsdrivelabelsv2betafieldlimits";
/**
 * Label constraints governing the structure of a Label; such as, the maximum number of Fields allowed and maximum length of the label title.
**/
export declare class GoogleAppsDriveLabelsV2betaLabelLimits extends SpeakeasyBase {
    fieldLimits?: GoogleAppsDriveLabelsV2betaFieldLimits;
    maxDeletedFields?: number;
    maxDescriptionLength?: number;
    maxDraftRevisions?: number;
    maxFields?: number;
    maxTitleLength?: number;
    name?: string;
}
