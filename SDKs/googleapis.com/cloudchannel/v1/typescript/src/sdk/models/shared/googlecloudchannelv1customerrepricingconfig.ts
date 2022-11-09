import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudChannelV1RepricingConfig } from "./googlecloudchannelv1repricingconfig";


// GoogleCloudChannelV1CustomerRepricingConfig
/** 
 * Configuration for how a reseller will reprice a Customer.
**/
export class GoogleCloudChannelV1CustomerRepricingConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=repricingConfig" })
  repricingConfig?: GoogleCloudChannelV1RepricingConfig;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
