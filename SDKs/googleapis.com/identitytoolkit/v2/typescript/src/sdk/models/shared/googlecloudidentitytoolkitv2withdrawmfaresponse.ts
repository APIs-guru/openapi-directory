import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudIdentitytoolkitV2WithdrawMfaResponse
/** 
 * Withdraws MultiFactorAuth response.
**/
export class GoogleCloudIdentitytoolkitV2WithdrawMfaResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=idToken" })
  idToken?: string;

  @Metadata({ data: "json, name=refreshToken" })
  refreshToken?: string;
}
