import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PasswordStatus
/** 
 * Read-only password status.
**/
export class PasswordStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=locked" })
  locked?: boolean;

  @SpeakeasyMetadata({ data: "json, name=passwordExpirationTime" })
  passwordExpirationTime?: string;
}
