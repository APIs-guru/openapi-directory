import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleAppsDriveLabelsV2betaLabelPermission } from "./googleappsdrivelabelsv2betalabelpermission";



// GoogleAppsDriveLabelsV2betaListLabelPermissionsResponse
/** 
 * Response for listing the permissions on a Label.
**/
export class GoogleAppsDriveLabelsV2betaListLabelPermissionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=labelPermissions", elemType: GoogleAppsDriveLabelsV2betaLabelPermission })
  labelPermissions?: GoogleAppsDriveLabelsV2betaLabelPermission[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
