import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudIdentitytoolkitV2WithdrawMfaResponse
/** 
 * Withdraws MultiFactorAuth response.
**/
export class GoogleCloudIdentitytoolkitV2WithdrawMfaResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=idToken" })
  idToken?: string;

  @SpeakeasyMetadata({ data: "json, name=refreshToken" })
  refreshToken?: string;
}
