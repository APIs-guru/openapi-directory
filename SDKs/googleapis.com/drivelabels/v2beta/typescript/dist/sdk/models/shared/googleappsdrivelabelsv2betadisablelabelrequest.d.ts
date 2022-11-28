import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAppsDriveLabelsV2betaLifecycleDisabledPolicy } from "./googleappsdrivelabelsv2betalifecycledisabledpolicy";
import { GoogleAppsDriveLabelsV2betaWriteControl } from "./googleappsdrivelabelsv2betawritecontrol";
/**
 * Request to deprecate a published Label.
**/
export declare class GoogleAppsDriveLabelsV2betaDisableLabelRequest extends SpeakeasyBase {
    disabledPolicy?: GoogleAppsDriveLabelsV2betaLifecycleDisabledPolicy;
    languageCode?: string;
    updateMask?: string;
    useAdminAccess?: boolean;
    writeControl?: GoogleAppsDriveLabelsV2betaWriteControl;
}
