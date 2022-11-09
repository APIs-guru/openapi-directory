import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudConnectorsV1Secret } from "./googlecloudconnectorsv1secret";
import { GoogleCloudConnectorsV1Secret } from "./googlecloudconnectorsv1secret";
import { GoogleCloudConnectorsV1Secret } from "./googlecloudconnectorsv1secret";


// GoogleCloudConnectorsV1AuthConfigSshPublicKey
/** 
 * Parameters to support Ssh public key Authentication.
**/
export class GoogleCloudConnectorsV1AuthConfigSshPublicKey extends SpeakeasyBase {
  @Metadata({ data: "json, name=certType" })
  certType?: string;

  @Metadata({ data: "json, name=password" })
  password?: GoogleCloudConnectorsV1Secret;

  @Metadata({ data: "json, name=sshClientCert" })
  sshClientCert?: GoogleCloudConnectorsV1Secret;

  @Metadata({ data: "json, name=sshClientCertPass" })
  sshClientCertPass?: GoogleCloudConnectorsV1Secret;

  @Metadata({ data: "json, name=username" })
  username?: string;
}
