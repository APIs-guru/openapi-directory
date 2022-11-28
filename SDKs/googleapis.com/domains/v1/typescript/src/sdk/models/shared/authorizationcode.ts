import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AuthorizationCode
/** 
 * Defines an authorization code.
**/
export class AuthorizationCode extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: string;
}
