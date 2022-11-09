import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PasswordStatus
/** 
 * Read-only password status.
**/
export class PasswordStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=locked" })
  locked?: boolean;

  @Metadata({ data: "json, name=passwordExpirationTime" })
  passwordExpirationTime?: string;
}
