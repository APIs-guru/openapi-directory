import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudChannelV1Customer } from "./googlecloudchannelv1customer";



// GoogleCloudChannelV1ListCustomersResponse
/** 
 * Response message for CloudChannelService.ListCustomers.
**/
export class GoogleCloudChannelV1ListCustomersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=customers", elemType: GoogleCloudChannelV1Customer })
  customers?: GoogleCloudChannelV1Customer[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
