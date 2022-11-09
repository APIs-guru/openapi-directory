import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudChannelV1CloudIdentityCustomerAccount } from "./googlecloudchannelv1cloudidentitycustomeraccount";


// GoogleCloudChannelV1CheckCloudIdentityAccountsExistResponse
/** 
 * Response message for CloudChannelService.CheckCloudIdentityAccountsExist.
**/
export class GoogleCloudChannelV1CheckCloudIdentityAccountsExistResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=cloudIdentityAccounts", elemType: shared.GoogleCloudChannelV1CloudIdentityCustomerAccount })
  cloudIdentityAccounts?: GoogleCloudChannelV1CloudIdentityCustomerAccount[];
}
