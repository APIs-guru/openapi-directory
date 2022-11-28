import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The update user password request body.
**/
export declare class UpdateUserPassword extends SpeakeasyBase {
    currentPassword?: string;
    currentPw?: string;
    newPw?: string;
    resetPassword?: boolean;
}
