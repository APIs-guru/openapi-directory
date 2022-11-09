import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SshKeyRequest
/** 
 * An object consisting of a user identified name as the `label` and the generated key as the `ssh-key`.
 * 
**/
export class SshKeyRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=label" })
  label?: string;

  @Metadata({ data: "json, name=ssh_key" })
  sshKey?: string;
}
