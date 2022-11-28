import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAppsDriveLabelsV2betaWriteControl } from "./googleappsdrivelabelsv2betawritecontrol";
/**
 * Request to publish a label.
**/
export declare class GoogleAppsDriveLabelsV2betaPublishLabelRequest extends SpeakeasyBase {
    languageCode?: string;
    useAdminAccess?: boolean;
    writeControl?: GoogleAppsDriveLabelsV2betaWriteControl;
}
