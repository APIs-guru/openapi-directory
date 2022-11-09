import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudChannelV1Constraints } from "./googlecloudchannelv1constraints";
import { GoogleCloudChannelV1MarketingInfo } from "./googlecloudchannelv1marketinginfo";
import { GoogleCloudChannelV1ParameterDefinition } from "./googlecloudchannelv1parameterdefinition";
import { GoogleCloudChannelV1Plan } from "./googlecloudchannelv1plan";
import { GoogleCloudChannelV1PriceByResource } from "./googlecloudchannelv1pricebyresource";
import { GoogleCloudChannelV1Sku } from "./googlecloudchannelv1sku";


// GoogleCloudChannelV1Offer
/** 
 * Represents an offer made to resellers for purchase. An offer is associated with a Sku, has a plan for payment, a price, and defines the constraints for buying.
**/
export class GoogleCloudChannelV1Offer extends SpeakeasyBase {
  @Metadata({ data: "json, name=constraints" })
  constraints?: GoogleCloudChannelV1Constraints;

  @Metadata({ data: "json, name=endTime" })
  endTime?: string;

  @Metadata({ data: "json, name=marketingInfo" })
  marketingInfo?: GoogleCloudChannelV1MarketingInfo;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=parameterDefinitions", elemType: shared.GoogleCloudChannelV1ParameterDefinition })
  parameterDefinitions?: GoogleCloudChannelV1ParameterDefinition[];

  @Metadata({ data: "json, name=plan" })
  plan?: GoogleCloudChannelV1Plan;

  @Metadata({ data: "json, name=priceByResources", elemType: shared.GoogleCloudChannelV1PriceByResource })
  priceByResources?: GoogleCloudChannelV1PriceByResource[];

  @Metadata({ data: "json, name=sku" })
  sku?: GoogleCloudChannelV1Sku;

  @Metadata({ data: "json, name=startTime" })
  startTime?: string;
}
