import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudChannelV1CustomerRepricingConfig } from "./googlecloudchannelv1customerrepricingconfig";


// GoogleCloudChannelV1ListCustomerRepricingConfigsResponse
/** 
 * Response message for CloudChannelService.ListCustomerRepricingConfigs.
**/
export class GoogleCloudChannelV1ListCustomerRepricingConfigsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=customerRepricingConfigs", elemType: shared.GoogleCloudChannelV1CustomerRepricingConfig })
  customerRepricingConfigs?: GoogleCloudChannelV1CustomerRepricingConfig[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
