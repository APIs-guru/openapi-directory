import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleAppsDriveLabelsV2betaDeleteLabelPermissionRequest
/** 
 * Deletes a Label Permission. Permissions affect the Label resource as a whole, are not revisioned, and do not require publishing.
**/
export class GoogleAppsDriveLabelsV2betaDeleteLabelPermissionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=useAdminAccess" })
  useAdminAccess?: boolean;
}
