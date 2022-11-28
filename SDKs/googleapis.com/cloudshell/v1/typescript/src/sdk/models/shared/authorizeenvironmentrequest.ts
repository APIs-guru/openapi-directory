import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AuthorizeEnvironmentRequest
/** 
 * Request message for AuthorizeEnvironment.
**/
export class AuthorizeEnvironmentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accessToken" })
  accessToken?: string;

  @SpeakeasyMetadata({ data: "json, name=expireTime" })
  expireTime?: string;

  @SpeakeasyMetadata({ data: "json, name=idToken" })
  idToken?: string;
}
