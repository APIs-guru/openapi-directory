import { SpeakeasyBase } from "../../../internal/utils";
import { PasswordStatus } from "./passwordstatus";
/**
 * User level password validation policy.
**/
export declare class UserPasswordValidationPolicy extends SpeakeasyBase {
    allowedFailedAttempts?: number;
    enableFailedAttemptsCheck?: boolean;
    enablePasswordVerification?: boolean;
    passwordExpirationDuration?: string;
    status?: PasswordStatus;
}
