import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleAppsDriveLabelsV2betaDeleteLabelPermissionRequest } from "./googleappsdrivelabelsv2betadeletelabelpermissionrequest";



// GoogleAppsDriveLabelsV2betaBatchDeleteLabelPermissionsRequest
/** 
 * Deletes one of more Label Permissions.
**/
export class GoogleAppsDriveLabelsV2betaBatchDeleteLabelPermissionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=requests", elemType: GoogleAppsDriveLabelsV2betaDeleteLabelPermissionRequest })
  requests?: GoogleAppsDriveLabelsV2betaDeleteLabelPermissionRequest[];

  @SpeakeasyMetadata({ data: "json, name=useAdminAccess" })
  useAdminAccess?: boolean;
}
