import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * The SSH public key information associated with a Google account.
**/
export declare class SshPublicKey extends SpeakeasyBase {
    expirationTimeUsec?: string;
    fingerprint?: string;
    key?: string;
    name?: string;
}
