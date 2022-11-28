import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudConnectorsV1Secret } from "./googlecloudconnectorsv1secret";
/**
 * Parameters to support Ssh public key Authentication.
**/
export declare class GoogleCloudConnectorsV1AuthConfigSshPublicKey extends SpeakeasyBase {
    certType?: string;
    sshClientCert?: GoogleCloudConnectorsV1Secret;
    sshClientCertPass?: GoogleCloudConnectorsV1Secret;
    username?: string;
}
