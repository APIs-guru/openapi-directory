import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAppsDriveLabelsV2betaLifecycleDisabledPolicy } from "./googleappsdrivelabelsv2betalifecycledisabledpolicy";
/**
 * Request to disable a Choice.
**/
export declare class GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestDisableSelectionChoiceRequest extends SpeakeasyBase {
    disabledPolicy?: GoogleAppsDriveLabelsV2betaLifecycleDisabledPolicy;
    fieldId?: string;
    id?: string;
    updateMask?: string;
}
