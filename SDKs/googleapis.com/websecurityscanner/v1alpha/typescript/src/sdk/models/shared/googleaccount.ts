import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleAccount
/** 
 * Describes authentication configuration that uses a Google account.
**/
export class GoogleAccount extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=password" })
  password?: string;

  @SpeakeasyMetadata({ data: "json, name=username" })
  username?: string;
}
