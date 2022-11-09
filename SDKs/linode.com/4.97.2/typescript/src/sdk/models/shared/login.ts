import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Login
/** 
 * An object representing a previous successful login for a User.
 * 
**/
export class Login extends SpeakeasyBase {
  @Metadata({ data: "json, name=datetime" })
  datetime?: Date;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=ip" })
  ip?: string;

  @Metadata({ data: "json, name=restricted" })
  restricted?: boolean;

  @Metadata({ data: "json, name=username" })
  username?: string;
}
