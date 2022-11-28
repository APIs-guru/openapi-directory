import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAppsDriveLabelsV2betaWriteControl } from "./googleappsdrivelabelsv2betawritecontrol";
/**
 * Request to enable a label.
**/
export declare class GoogleAppsDriveLabelsV2betaEnableLabelRequest extends SpeakeasyBase {
    languageCode?: string;
    useAdminAccess?: boolean;
    writeControl?: GoogleAppsDriveLabelsV2betaWriteControl;
}
