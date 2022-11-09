import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleAppsDriveLabelsV2betaDeleteLabelPermissionRequest } from "./googleappsdrivelabelsv2betadeletelabelpermissionrequest";


// GoogleAppsDriveLabelsV2betaBatchDeleteLabelPermissionsRequest
/** 
 * Deletes one of more Label Permissions.
**/
export class GoogleAppsDriveLabelsV2betaBatchDeleteLabelPermissionsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=requests", elemType: shared.GoogleAppsDriveLabelsV2betaDeleteLabelPermissionRequest })
  requests?: GoogleAppsDriveLabelsV2betaDeleteLabelPermissionRequest[];

  @Metadata({ data: "json, name=useAdminAccess" })
  useAdminAccess?: boolean;
}
