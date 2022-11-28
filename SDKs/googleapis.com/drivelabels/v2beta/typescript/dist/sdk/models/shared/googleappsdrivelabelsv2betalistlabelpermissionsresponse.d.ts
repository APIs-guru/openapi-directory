import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAppsDriveLabelsV2betaLabelPermission } from "./googleappsdrivelabelsv2betalabelpermission";
/**
 * Response for listing the permissions on a Label.
**/
export declare class GoogleAppsDriveLabelsV2betaListLabelPermissionsResponse extends SpeakeasyBase {
    labelPermissions?: GoogleAppsDriveLabelsV2betaLabelPermission[];
    nextPageToken?: string;
}
