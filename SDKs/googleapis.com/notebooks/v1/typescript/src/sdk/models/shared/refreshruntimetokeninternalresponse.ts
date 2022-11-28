import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RefreshRuntimeTokenInternalResponse
/** 
 * Response with a new access token.
**/
export class RefreshRuntimeTokenInternalResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accessToken" })
  accessToken?: string;

  @SpeakeasyMetadata({ data: "json, name=expireTime" })
  expireTime?: string;
}
