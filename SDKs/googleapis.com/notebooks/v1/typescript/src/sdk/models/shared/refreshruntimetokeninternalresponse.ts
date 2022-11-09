import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// RefreshRuntimeTokenInternalResponse
/** 
 * Response with a new access token.
**/
export class RefreshRuntimeTokenInternalResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=accessToken" })
  accessToken?: string;

  @Metadata({ data: "json, name=expireTime" })
  expireTime?: string;
}
