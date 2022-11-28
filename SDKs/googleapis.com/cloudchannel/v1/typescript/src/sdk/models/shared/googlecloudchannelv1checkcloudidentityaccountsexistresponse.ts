import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudChannelV1CloudIdentityCustomerAccount } from "./googlecloudchannelv1cloudidentitycustomeraccount";



// GoogleCloudChannelV1CheckCloudIdentityAccountsExistResponse
/** 
 * Response message for CloudChannelService.CheckCloudIdentityAccountsExist.
**/
export class GoogleCloudChannelV1CheckCloudIdentityAccountsExistResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cloudIdentityAccounts", elemType: GoogleCloudChannelV1CloudIdentityCustomerAccount })
  cloudIdentityAccounts?: GoogleCloudChannelV1CloudIdentityCustomerAccount[];
}
