import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAppsDriveLabelsV2betaLifecycleDisabledPolicy } from "./googleappsdrivelabelsv2betalifecycledisabledpolicy";
/**
 * Request to disable the Field.
**/
export declare class GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestDisableFieldRequest extends SpeakeasyBase {
    disabledPolicy?: GoogleAppsDriveLabelsV2betaLifecycleDisabledPolicy;
    id?: string;
    updateMask?: string;
}
