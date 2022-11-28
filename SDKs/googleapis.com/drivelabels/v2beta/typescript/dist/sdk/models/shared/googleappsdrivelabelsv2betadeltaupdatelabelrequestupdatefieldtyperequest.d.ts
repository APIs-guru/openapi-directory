import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAppsDriveLabelsV2betaFieldDateOptionsInput } from "./googleappsdrivelabelsv2betafielddateoptions";
import { GoogleAppsDriveLabelsV2betaFieldSelectionOptionsInput } from "./googleappsdrivelabelsv2betafieldselectionoptions";
import { GoogleAppsDriveLabelsV2betaFieldUserOptions } from "./googleappsdrivelabelsv2betafielduseroptions";
/**
 * Request to change the type of a Field.
**/
export declare class GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestUpdateFieldTypeRequestInput extends SpeakeasyBase {
    dateOptions?: GoogleAppsDriveLabelsV2betaFieldDateOptionsInput;
    id?: string;
    selectionOptions?: GoogleAppsDriveLabelsV2betaFieldSelectionOptionsInput;
    updateMask?: string;
    userOptions?: GoogleAppsDriveLabelsV2betaFieldUserOptions;
}
