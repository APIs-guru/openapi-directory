import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SshKey
/** 
 * A credential object for authenticating a User's secure shell connection to a Linode.
 * 
**/
export class SshKey extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=created" })
  created?: Date;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=label" })
  label?: string;

  @SpeakeasyMetadata({ data: "json, name=ssh_key" })
  sshKey?: string;
}


// SshKeyInput
/** 
 * A credential object for authenticating a User's secure shell connection to a Linode.
 * 
**/
export class SshKeyInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=label" })
  label?: string;
}
