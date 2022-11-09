import { SpeakeasyBase } from "../../../internal/utils/utils";
import { PosixAccount } from "./posixaccount";
import { SecurityKey } from "./securitykey";
import { SshPublicKey } from "./sshpublickey";
/**
 * The user profile information used for logging in to a virtual machine on Google Compute Engine.
**/
export declare class LoginProfile extends SpeakeasyBase {
    name?: string;
    posixAccounts?: PosixAccount[];
    securityKeys?: SecurityKey[];
    sshPublicKeys?: Map<string, SshPublicKey>;
}
