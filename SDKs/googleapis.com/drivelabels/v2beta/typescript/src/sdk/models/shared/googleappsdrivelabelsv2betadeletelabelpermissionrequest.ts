import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleAppsDriveLabelsV2betaDeleteLabelPermissionRequest
/** 
 * Deletes a Label Permission. Permissions affect the Label resource as a whole, are not revisioned, and do not require publishing.
**/
export class GoogleAppsDriveLabelsV2betaDeleteLabelPermissionRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=useAdminAccess" })
  useAdminAccess?: boolean;
}
