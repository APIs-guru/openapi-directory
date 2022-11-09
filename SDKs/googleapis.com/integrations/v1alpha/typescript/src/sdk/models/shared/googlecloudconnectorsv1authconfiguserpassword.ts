import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudConnectorsV1Secret } from "./googlecloudconnectorsv1secret";


// GoogleCloudConnectorsV1AuthConfigUserPassword
/** 
 * Parameters to support Username and Password Authentication.
**/
export class GoogleCloudConnectorsV1AuthConfigUserPassword extends SpeakeasyBase {
  @Metadata({ data: "json, name=password" })
  password?: GoogleCloudConnectorsV1Secret;

  @Metadata({ data: "json, name=username" })
  username?: string;
}
