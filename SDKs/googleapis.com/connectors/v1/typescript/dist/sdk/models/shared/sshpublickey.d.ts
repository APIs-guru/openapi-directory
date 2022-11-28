import { SpeakeasyBase } from "../../../internal/utils";
import { Secret } from "./secret";
/**
 * Parameters to support Ssh public key Authentication.
**/
export declare class SshPublicKey extends SpeakeasyBase {
    certType?: string;
    sshClientCert?: Secret;
    sshClientCertPass?: Secret;
    username?: string;
}
