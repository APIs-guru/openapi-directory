import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SshPublicKey
/** 
 * The SSH public key information associated with a Google account.
**/
export class SshPublicKey extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=expirationTimeUsec" })
  expirationTimeUsec?: string;

  @SpeakeasyMetadata({ data: "json, name=fingerprint" })
  fingerprint?: string;

  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}


// SshPublicKeyInput
/** 
 * The SSH public key information associated with a Google account.
**/
export class SshPublicKeyInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=expirationTimeUsec" })
  expirationTimeUsec?: string;

  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: string;
}
