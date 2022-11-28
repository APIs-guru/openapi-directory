import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudChannelV1Constraints } from "./googlecloudchannelv1constraints";
import { GoogleCloudChannelV1MarketingInfo } from "./googlecloudchannelv1marketinginfo";
import { GoogleCloudChannelV1ParameterDefinition } from "./googlecloudchannelv1parameterdefinition";
import { GoogleCloudChannelV1Plan } from "./googlecloudchannelv1plan";
import { GoogleCloudChannelV1PriceByResource } from "./googlecloudchannelv1pricebyresource";
import { GoogleCloudChannelV1Sku } from "./googlecloudchannelv1sku";
/**
 * Represents an offer made to resellers for purchase. An offer is associated with a Sku, has a plan for payment, a price, and defines the constraints for buying.
**/
export declare class GoogleCloudChannelV1Offer extends SpeakeasyBase {
    constraints?: GoogleCloudChannelV1Constraints;
    dealCode?: string;
    endTime?: string;
    marketingInfo?: GoogleCloudChannelV1MarketingInfo;
    name?: string;
    parameterDefinitions?: GoogleCloudChannelV1ParameterDefinition[];
    plan?: GoogleCloudChannelV1Plan;
    priceByResources?: GoogleCloudChannelV1PriceByResource[];
    sku?: GoogleCloudChannelV1Sku;
    startTime?: string;
}
