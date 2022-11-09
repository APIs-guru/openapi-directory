import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SshKey
/** 
 * A credential object for authenticating a User's secure shell connection to a Linode.
 * 
**/
export class SshKey extends SpeakeasyBase {
  @Metadata({ data: "json, name=created" })
  created?: Date;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=label" })
  label?: string;

  @Metadata({ data: "json, name=ssh_key" })
  sshKey?: string;
}
