import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Secret } from "./secret";



// SshPublicKey
/** 
 * Parameters to support Ssh public key Authentication.
**/
export class SshPublicKey extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=certType" })
  certType?: string;

  @SpeakeasyMetadata({ data: "json, name=sshClientCert" })
  sshClientCert?: Secret;

  @SpeakeasyMetadata({ data: "json, name=sshClientCertPass" })
  sshClientCertPass?: Secret;

  @SpeakeasyMetadata({ data: "json, name=username" })
  username?: string;
}
