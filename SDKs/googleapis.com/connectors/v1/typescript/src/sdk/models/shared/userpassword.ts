import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Secret } from "./secret";


// UserPassword
/** 
 * Parameters to support Username and Password Authentication.
**/
export class UserPassword extends SpeakeasyBase {
  @Metadata({ data: "json, name=password" })
  password?: Secret;

  @Metadata({ data: "json, name=username" })
  username?: string;
}
