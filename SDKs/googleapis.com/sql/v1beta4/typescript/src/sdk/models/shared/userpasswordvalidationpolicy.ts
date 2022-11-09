import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PasswordStatus } from "./passwordstatus";


// UserPasswordValidationPolicy
/** 
 * User level password validation policy.
**/
export class UserPasswordValidationPolicy extends SpeakeasyBase {
  @Metadata({ data: "json, name=allowedFailedAttempts" })
  allowedFailedAttempts?: number;

  @Metadata({ data: "json, name=enableFailedAttemptsCheck" })
  enableFailedAttemptsCheck?: boolean;

  @Metadata({ data: "json, name=enablePasswordVerification" })
  enablePasswordVerification?: boolean;

  @Metadata({ data: "json, name=passwordExpirationDuration" })
  passwordExpirationDuration?: string;

  @Metadata({ data: "json, name=status" })
  status?: PasswordStatus;
}
