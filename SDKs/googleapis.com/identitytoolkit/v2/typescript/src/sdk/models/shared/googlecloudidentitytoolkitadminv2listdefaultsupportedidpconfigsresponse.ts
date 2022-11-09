import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdpConfig } from "./googlecloudidentitytoolkitadminv2defaultsupportedidpconfig";


// GoogleCloudIdentitytoolkitAdminV2ListDefaultSupportedIdpConfigsResponse
/** 
 * Response for DefaultSupportedIdpConfigs
**/
export class GoogleCloudIdentitytoolkitAdminV2ListDefaultSupportedIdpConfigsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=defaultSupportedIdpConfigs", elemType: shared.GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdpConfig })
  defaultSupportedIdpConfigs?: GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdpConfig[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
