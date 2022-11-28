import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudChannelV1CustomerRepricingConfig } from "./googlecloudchannelv1customerrepricingconfig";



// GoogleCloudChannelV1ListCustomerRepricingConfigsResponse
/** 
 * Response message for CloudChannelService.ListCustomerRepricingConfigs.
**/
export class GoogleCloudChannelV1ListCustomerRepricingConfigsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=customerRepricingConfigs", elemType: GoogleCloudChannelV1CustomerRepricingConfig })
  customerRepricingConfigs?: GoogleCloudChannelV1CustomerRepricingConfig[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
