import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Secret } from "./secret";
import { Secret } from "./secret";
import { Secret } from "./secret";


// SshPublicKey
/** 
 * Parameters to support Ssh public key Authentication.
**/
export class SshPublicKey extends SpeakeasyBase {
  @Metadata({ data: "json, name=certType" })
  certType?: string;

  @Metadata({ data: "json, name=password" })
  password?: Secret;

  @Metadata({ data: "json, name=sshClientCert" })
  sshClientCert?: Secret;

  @Metadata({ data: "json, name=sshClientCertPass" })
  sshClientCertPass?: Secret;

  @Metadata({ data: "json, name=username" })
  username?: string;
}
