import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CustomAccount
/** 
 * Describes authentication configuration that uses a custom account.
**/
export class CustomAccount extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=loginUrl" })
  loginUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=password" })
  password?: string;

  @SpeakeasyMetadata({ data: "json, name=username" })
  username?: string;
}
