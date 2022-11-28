import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAppsDriveLabelsV2betaFieldProperties } from "./googleappsdrivelabelsv2betafieldproperties";
/**
 * Request to update Field properties.
**/
export declare class GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestUpdateFieldPropertiesRequest extends SpeakeasyBase {
    id?: string;
    properties?: GoogleAppsDriveLabelsV2betaFieldProperties;
    updateMask?: string;
}
