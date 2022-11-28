import { SpeakeasyBase } from "../../../internal/utils";
import { PosixAccount } from "./posixaccount";
import { SshPublicKey } from "./sshpublickey";
/**
 * The user profile information used for logging in to a virtual machine on Google Compute Engine.
**/
export declare class LoginProfile extends SpeakeasyBase {
    name?: string;
    posixAccounts?: PosixAccount[];
    sshPublicKeys?: Map<string, SshPublicKey>;
}
