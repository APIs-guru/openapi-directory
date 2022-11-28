import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudConnectorsV1Secret } from "./googlecloudconnectorsv1secret";



// GoogleCloudConnectorsV1AuthConfigSshPublicKey
/** 
 * Parameters to support Ssh public key Authentication.
**/
export class GoogleCloudConnectorsV1AuthConfigSshPublicKey extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=certType" })
  certType?: string;

  @SpeakeasyMetadata({ data: "json, name=sshClientCert" })
  sshClientCert?: GoogleCloudConnectorsV1Secret;

  @SpeakeasyMetadata({ data: "json, name=sshClientCertPass" })
  sshClientCertPass?: GoogleCloudConnectorsV1Secret;

  @SpeakeasyMetadata({ data: "json, name=username" })
  username?: string;
}
