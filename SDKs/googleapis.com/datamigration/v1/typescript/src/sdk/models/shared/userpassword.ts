import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// UserPasswordInput
/** 
 * The username/password for a database user. Used for specifying initial users at cluster creation time.
**/
export class UserPasswordInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=password" })
  password?: string;

  @SpeakeasyMetadata({ data: "json, name=user" })
  user?: string;
}


// UserPassword
/** 
 * The username/password for a database user. Used for specifying initial users at cluster creation time.
**/
export class UserPassword extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=password" })
  password?: string;

  @SpeakeasyMetadata({ data: "json, name=passwordSet" })
  passwordSet?: boolean;

  @SpeakeasyMetadata({ data: "json, name=user" })
  user?: string;
}
