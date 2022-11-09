import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AuthorizationCode
/** 
 * Defines an authorization code.
**/
export class AuthorizationCode extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: string;
}
