import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudChannelV1RepricingConfig } from "./googlecloudchannelv1repricingconfig";



// GoogleCloudChannelV1CustomerRepricingConfigInput
/** 
 * Configuration for how a reseller will reprice a Customer.
**/
export class GoogleCloudChannelV1CustomerRepricingConfigInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=repricingConfig" })
  repricingConfig?: GoogleCloudChannelV1RepricingConfig;
}


// GoogleCloudChannelV1CustomerRepricingConfig
/** 
 * Configuration for how a reseller will reprice a Customer.
**/
export class GoogleCloudChannelV1CustomerRepricingConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=repricingConfig" })
  repricingConfig?: GoogleCloudChannelV1RepricingConfig;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
