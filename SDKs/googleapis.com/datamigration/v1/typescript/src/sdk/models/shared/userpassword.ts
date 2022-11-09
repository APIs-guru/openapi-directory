import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// UserPassword
/** 
 * The username/password for a database user. Used for specifying initial users at cluster creation time.
**/
export class UserPassword extends SpeakeasyBase {
  @Metadata({ data: "json, name=password" })
  password?: string;

  @Metadata({ data: "json, name=passwordSet" })
  passwordSet?: boolean;

  @Metadata({ data: "json, name=user" })
  user?: string;
}
