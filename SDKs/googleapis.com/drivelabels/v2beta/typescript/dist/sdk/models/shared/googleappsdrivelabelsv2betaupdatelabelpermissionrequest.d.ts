import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAppsDriveLabelsV2betaLabelPermission } from "./googleappsdrivelabelsv2betalabelpermission";
/**
 * Updates a Label Permission. Permissions affect the Label resource as a whole, are not revisioned, and do not require publishing.
**/
export declare class GoogleAppsDriveLabelsV2betaUpdateLabelPermissionRequest extends SpeakeasyBase {
    labelPermission?: GoogleAppsDriveLabelsV2betaLabelPermission;
    parent?: string;
    useAdminAccess?: boolean;
}
