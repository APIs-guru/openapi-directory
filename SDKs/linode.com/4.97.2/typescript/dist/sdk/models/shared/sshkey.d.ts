import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A credential object for authenticating a User's secure shell connection to a Linode.
 *
**/
export declare class SshKey extends SpeakeasyBase {
    created?: Date;
    id?: number;
    label?: string;
    sshKey?: string;
}
/**
 * A credential object for authenticating a User's secure shell connection to a Linode.
 *
**/
export declare class SshKeyInput extends SpeakeasyBase {
    label?: string;
}
