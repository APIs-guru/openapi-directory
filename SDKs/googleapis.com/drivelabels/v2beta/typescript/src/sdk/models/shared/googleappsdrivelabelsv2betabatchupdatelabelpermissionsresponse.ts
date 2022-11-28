import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleAppsDriveLabelsV2betaLabelPermission } from "./googleappsdrivelabelsv2betalabelpermission";



// GoogleAppsDriveLabelsV2betaBatchUpdateLabelPermissionsResponse
/** 
 * Response for updating one or more Label Permissions.
**/
export class GoogleAppsDriveLabelsV2betaBatchUpdateLabelPermissionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=permissions", elemType: GoogleAppsDriveLabelsV2betaLabelPermission })
  permissions?: GoogleAppsDriveLabelsV2betaLabelPermission[];
}
