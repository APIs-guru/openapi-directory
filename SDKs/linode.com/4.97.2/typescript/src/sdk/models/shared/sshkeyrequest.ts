import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SshKeyRequest
/** 
 * An object consisting of a user identified name as the `label` and the generated key as the `ssh-key`.
 * 
**/
export class SshKeyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=label" })
  label?: string;

  @SpeakeasyMetadata({ data: "json, name=ssh_key" })
  sshKey?: string;
}
