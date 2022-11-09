import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CustomAccount
/** 
 * Describes authentication configuration that uses a custom account.
**/
export class CustomAccount extends SpeakeasyBase {
  @Metadata({ data: "json, name=loginUrl" })
  loginUrl?: string;

  @Metadata({ data: "json, name=password" })
  password?: string;

  @Metadata({ data: "json, name=username" })
  username?: string;
}
