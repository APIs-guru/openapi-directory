import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleAppsDriveLabelsV2betaUpdateLabelPermissionRequest } from "./googleappsdrivelabelsv2betaupdatelabelpermissionrequest";



// GoogleAppsDriveLabelsV2betaBatchUpdateLabelPermissionsRequest
/** 
 * Updates one or more Label Permissions.
**/
export class GoogleAppsDriveLabelsV2betaBatchUpdateLabelPermissionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=requests", elemType: GoogleAppsDriveLabelsV2betaUpdateLabelPermissionRequest })
  requests?: GoogleAppsDriveLabelsV2betaUpdateLabelPermissionRequest[];

  @SpeakeasyMetadata({ data: "json, name=useAdminAccess" })
  useAdminAccess?: boolean;
}
