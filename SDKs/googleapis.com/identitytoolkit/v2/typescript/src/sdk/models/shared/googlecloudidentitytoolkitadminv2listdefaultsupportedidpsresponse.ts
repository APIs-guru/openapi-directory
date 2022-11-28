import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdp } from "./googlecloudidentitytoolkitadminv2defaultsupportedidp";



// GoogleCloudIdentitytoolkitAdminV2ListDefaultSupportedIdpsResponse
/** 
 * Response for ListDefaultSupportedIdps
**/
export class GoogleCloudIdentitytoolkitAdminV2ListDefaultSupportedIdpsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=defaultSupportedIdps", elemType: GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdp })
  defaultSupportedIdps?: GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdp[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
