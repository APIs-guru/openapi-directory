import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PasswordStatus } from "./passwordstatus";



// UserPasswordValidationPolicy
/** 
 * User level password validation policy.
**/
export class UserPasswordValidationPolicy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allowedFailedAttempts" })
  allowedFailedAttempts?: number;

  @SpeakeasyMetadata({ data: "json, name=enableFailedAttemptsCheck" })
  enableFailedAttemptsCheck?: boolean;

  @SpeakeasyMetadata({ data: "json, name=enablePasswordVerification" })
  enablePasswordVerification?: boolean;

  @SpeakeasyMetadata({ data: "json, name=passwordExpirationDuration" })
  passwordExpirationDuration?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: PasswordStatus;
}
