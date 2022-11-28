import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudConnectorsV1Secret } from "./googlecloudconnectorsv1secret";



// GoogleCloudConnectorsV1AuthConfigUserPassword
/** 
 * Parameters to support Username and Password Authentication.
**/
export class GoogleCloudConnectorsV1AuthConfigUserPassword extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=password" })
  password?: GoogleCloudConnectorsV1Secret;

  @SpeakeasyMetadata({ data: "json, name=username" })
  username?: string;
}
