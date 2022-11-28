import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudChannelV1CheckCloudIdentityAccountsExistRequest
/** 
 * Request message for CloudChannelService.CheckCloudIdentityAccountsExist.
**/
export class GoogleCloudChannelV1CheckCloudIdentityAccountsExistRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=domain" })
  domain?: string;
}
