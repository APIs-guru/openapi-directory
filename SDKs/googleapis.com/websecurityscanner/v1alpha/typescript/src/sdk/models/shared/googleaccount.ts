import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleAccount
/** 
 * Describes authentication configuration that uses a Google account.
**/
export class GoogleAccount extends SpeakeasyBase {
  @Metadata({ data: "json, name=password" })
  password?: string;

  @Metadata({ data: "json, name=username" })
  username?: string;
}
