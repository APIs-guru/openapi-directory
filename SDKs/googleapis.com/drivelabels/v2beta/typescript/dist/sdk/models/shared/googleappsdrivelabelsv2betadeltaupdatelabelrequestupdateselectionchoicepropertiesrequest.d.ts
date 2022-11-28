import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceProperties } from "./googleappsdrivelabelsv2betafieldselectionoptionschoiceproperties";
/**
 * Request to update a Choice properties.
**/
export declare class GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestUpdateSelectionChoicePropertiesRequest extends SpeakeasyBase {
    fieldId?: string;
    id?: string;
    properties?: GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceProperties;
    updateMask?: string;
}
