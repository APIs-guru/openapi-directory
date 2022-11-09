import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleAppsDriveLabelsV2betaLabelPermission } from "./googleappsdrivelabelsv2betalabelpermission";


// GoogleAppsDriveLabelsV2betaUpdateLabelPermissionRequest
/** 
 * Updates a Label Permission. Permissions affect the Label resource as a whole, are not revisioned, and do not require publishing.
**/
export class GoogleAppsDriveLabelsV2betaUpdateLabelPermissionRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=labelPermission" })
  labelPermission?: GoogleAppsDriveLabelsV2betaLabelPermission;

  @Metadata({ data: "json, name=parent" })
  parent?: string;

  @Metadata({ data: "json, name=useAdminAccess" })
  useAdminAccess?: boolean;
}
