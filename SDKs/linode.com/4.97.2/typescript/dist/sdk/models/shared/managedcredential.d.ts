import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A securely-stored Credential that allows Linode's special forces to access a Managed server to respond to Issues.
 *
**/
export declare class ManagedCredentialInput extends SpeakeasyBase {
    label?: string;
}
/**
 * A securely-stored Credential that allows Linode's special forces to access a Managed server to respond to Issues.
 *
**/
export declare class ManagedCredential extends SpeakeasyBase {
    id?: number;
    label?: string;
    lastDecrypted?: Date;
}
