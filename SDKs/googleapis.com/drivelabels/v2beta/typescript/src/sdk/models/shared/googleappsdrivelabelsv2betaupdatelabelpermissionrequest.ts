import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleAppsDriveLabelsV2betaLabelPermission } from "./googleappsdrivelabelsv2betalabelpermission";



// GoogleAppsDriveLabelsV2betaUpdateLabelPermissionRequest
/** 
 * Updates a Label Permission. Permissions affect the Label resource as a whole, are not revisioned, and do not require publishing.
**/
export class GoogleAppsDriveLabelsV2betaUpdateLabelPermissionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=labelPermission" })
  labelPermission?: GoogleAppsDriveLabelsV2betaLabelPermission;

  @SpeakeasyMetadata({ data: "json, name=parent" })
  parent?: string;

  @SpeakeasyMetadata({ data: "json, name=useAdminAccess" })
  useAdminAccess?: boolean;
}
