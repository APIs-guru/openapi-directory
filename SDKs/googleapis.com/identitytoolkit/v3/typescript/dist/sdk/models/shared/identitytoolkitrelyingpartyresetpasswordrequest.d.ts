import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request to reset the password.
**/
export declare class IdentitytoolkitRelyingpartyResetPasswordRequest extends SpeakeasyBase {
    email?: string;
    newPassword?: string;
    oldPassword?: string;
    oobCode?: string;
}
