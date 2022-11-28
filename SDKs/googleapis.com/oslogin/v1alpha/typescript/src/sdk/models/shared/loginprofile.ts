import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PosixAccount } from "./posixaccount";
import { SecurityKey } from "./securitykey";
import { SshPublicKey } from "./sshpublickey";



// LoginProfile
/** 
 * The user profile information used for logging in to a virtual machine on Google Compute Engine.
**/
export class LoginProfile extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=posixAccounts", elemType: PosixAccount })
  posixAccounts?: PosixAccount[];

  @SpeakeasyMetadata({ data: "json, name=securityKeys", elemType: SecurityKey })
  securityKeys?: SecurityKey[];

  @SpeakeasyMetadata({ data: "json, name=sshPublicKeys", elemType: SshPublicKey })
  sshPublicKeys?: Map<string, SshPublicKey>;
}
