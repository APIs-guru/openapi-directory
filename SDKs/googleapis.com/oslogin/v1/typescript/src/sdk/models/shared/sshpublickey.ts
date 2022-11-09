import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SshPublicKey
/** 
 * The SSH public key information associated with a Google account.
**/
export class SshPublicKey extends SpeakeasyBase {
  @Metadata({ data: "json, name=expirationTimeUsec" })
  expirationTimeUsec?: string;

  @Metadata({ data: "json, name=fingerprint" })
  fingerprint?: string;

  @Metadata({ data: "json, name=key" })
  key?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
