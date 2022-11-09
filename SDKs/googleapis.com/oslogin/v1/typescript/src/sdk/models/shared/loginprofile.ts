import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PosixAccount } from "./posixaccount";
import { SshPublicKey } from "./sshpublickey";


// LoginProfile
/** 
 * The user profile information used for logging in to a virtual machine on Google Compute Engine.
**/
export class LoginProfile extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=posixAccounts", elemType: shared.PosixAccount })
  posixAccounts?: PosixAccount[];

  @Metadata({ data: "json, name=sshPublicKeys", elemType: shared.SshPublicKey })
  sshPublicKeys?: Map<string, SshPublicKey>;
}
