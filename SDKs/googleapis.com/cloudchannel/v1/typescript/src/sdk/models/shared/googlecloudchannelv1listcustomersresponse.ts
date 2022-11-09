import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudChannelV1Customer } from "./googlecloudchannelv1customer";


// GoogleCloudChannelV1ListCustomersResponse
/** 
 * Response message for CloudChannelService.ListCustomers.
**/
export class GoogleCloudChannelV1ListCustomersResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=customers", elemType: shared.GoogleCloudChannelV1Customer })
  customers?: GoogleCloudChannelV1Customer[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
