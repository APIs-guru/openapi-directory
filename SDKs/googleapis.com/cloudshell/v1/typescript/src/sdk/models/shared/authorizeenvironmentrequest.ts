import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AuthorizeEnvironmentRequest
/** 
 * Request message for AuthorizeEnvironment.
**/
export class AuthorizeEnvironmentRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=accessToken" })
  accessToken?: string;

  @Metadata({ data: "json, name=expireTime" })
  expireTime?: string;

  @Metadata({ data: "json, name=idToken" })
  idToken?: string;
}
