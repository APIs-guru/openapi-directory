import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleAppsDriveLabelsV2betaLabelPermission } from "./googleappsdrivelabelsv2betalabelpermission";


// GoogleAppsDriveLabelsV2betaBatchUpdateLabelPermissionsResponse
/** 
 * Response for updating one or more Label Permissions.
**/
export class GoogleAppsDriveLabelsV2betaBatchUpdateLabelPermissionsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=permissions", elemType: shared.GoogleAppsDriveLabelsV2betaLabelPermission })
  permissions?: GoogleAppsDriveLabelsV2betaLabelPermission[];
}
