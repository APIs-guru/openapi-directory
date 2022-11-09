import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdp } from "./googlecloudidentitytoolkitadminv2defaultsupportedidp";


// GoogleCloudIdentitytoolkitAdminV2ListDefaultSupportedIdpsResponse
/** 
 * Response for ListDefaultSupportedIdps
**/
export class GoogleCloudIdentitytoolkitAdminV2ListDefaultSupportedIdpsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=defaultSupportedIdps", elemType: shared.GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdp })
  defaultSupportedIdps?: GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdp[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
