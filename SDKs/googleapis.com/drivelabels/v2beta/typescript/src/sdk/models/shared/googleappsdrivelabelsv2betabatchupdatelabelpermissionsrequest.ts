import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleAppsDriveLabelsV2betaUpdateLabelPermissionRequest } from "./googleappsdrivelabelsv2betaupdatelabelpermissionrequest";


// GoogleAppsDriveLabelsV2betaBatchUpdateLabelPermissionsRequest
/** 
 * Updates one or more Label Permissions.
**/
export class GoogleAppsDriveLabelsV2betaBatchUpdateLabelPermissionsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=requests", elemType: shared.GoogleAppsDriveLabelsV2betaUpdateLabelPermissionRequest })
  requests?: GoogleAppsDriveLabelsV2betaUpdateLabelPermissionRequest[];

  @Metadata({ data: "json, name=useAdminAccess" })
  useAdminAccess?: boolean;
}
