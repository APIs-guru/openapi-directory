import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An object consisting of a user identified name as the `label` and the generated key as the `ssh-key`.
 *
**/
export declare class SshKeyRequest extends SpeakeasyBase {
    label?: string;
    sshKey?: string;
}
