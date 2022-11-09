import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleAppsDriveLabelsV2betaLabelPermission } from "./googleappsdrivelabelsv2betalabelpermission";


// GoogleAppsDriveLabelsV2betaListLabelPermissionsResponse
/** 
 * Response for listing the permissions on a Label.
**/
export class GoogleAppsDriveLabelsV2betaListLabelPermissionsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=labelPermissions", elemType: shared.GoogleAppsDriveLabelsV2betaLabelPermission })
  labelPermissions?: GoogleAppsDriveLabelsV2betaLabelPermission[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
