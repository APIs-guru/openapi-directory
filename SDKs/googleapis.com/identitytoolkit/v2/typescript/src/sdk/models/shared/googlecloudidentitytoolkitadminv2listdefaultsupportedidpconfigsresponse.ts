import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdpConfig } from "./googlecloudidentitytoolkitadminv2defaultsupportedidpconfig";



// GoogleCloudIdentitytoolkitAdminV2ListDefaultSupportedIdpConfigsResponse
/** 
 * Response for DefaultSupportedIdpConfigs
**/
export class GoogleCloudIdentitytoolkitAdminV2ListDefaultSupportedIdpConfigsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=defaultSupportedIdpConfigs", elemType: GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdpConfig })
  defaultSupportedIdpConfigs?: GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdpConfig[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
