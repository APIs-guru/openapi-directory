import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Secret } from "./secret";



// UserPassword
/** 
 * Parameters to support Username and Password Authentication.
**/
export class UserPassword extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=password" })
  password?: Secret;

  @SpeakeasyMetadata({ data: "json, name=username" })
  username?: string;
}
