import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Login
/** 
 * An object representing a previous successful login for a User.
 * 
**/
export class Login extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=datetime" })
  datetime?: Date;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=ip" })
  ip?: string;

  @SpeakeasyMetadata({ data: "json, name=restricted" })
  restricted?: boolean;

  @SpeakeasyMetadata({ data: "json, name=username" })
  username?: string;
}
