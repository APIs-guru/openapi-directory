import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The SSH public key information associated with a Google account.
**/
export declare class SshPublicKeyInput extends SpeakeasyBase {
    expirationTimeUsec?: string;
    key?: string;
}
/**
 * The SSH public key information associated with a Google account.
**/
export declare class SshPublicKey extends SpeakeasyBase {
    expirationTimeUsec?: string;
    fingerprint?: string;
    key?: string;
    name?: string;
}
