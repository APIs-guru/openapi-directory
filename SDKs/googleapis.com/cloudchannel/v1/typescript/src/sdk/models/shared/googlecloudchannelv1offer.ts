import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
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
  @SpeakeasyMetadata({ data: "json, name=constraints" })
  constraints?: GoogleCloudChannelV1Constraints;

  @SpeakeasyMetadata({ data: "json, name=dealCode" })
  dealCode?: string;

  @SpeakeasyMetadata({ data: "json, name=endTime" })
  endTime?: string;

  @SpeakeasyMetadata({ data: "json, name=marketingInfo" })
  marketingInfo?: GoogleCloudChannelV1MarketingInfo;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=parameterDefinitions", elemType: GoogleCloudChannelV1ParameterDefinition })
  parameterDefinitions?: GoogleCloudChannelV1ParameterDefinition[];

  @SpeakeasyMetadata({ data: "json, name=plan" })
  plan?: GoogleCloudChannelV1Plan;

  @SpeakeasyMetadata({ data: "json, name=priceByResources", elemType: GoogleCloudChannelV1PriceByResource })
  priceByResources?: GoogleCloudChannelV1PriceByResource[];

  @SpeakeasyMetadata({ data: "json, name=sku" })
  sku?: GoogleCloudChannelV1Sku;

  @SpeakeasyMetadata({ data: "json, name=startTime" })
  startTime?: string;
}
