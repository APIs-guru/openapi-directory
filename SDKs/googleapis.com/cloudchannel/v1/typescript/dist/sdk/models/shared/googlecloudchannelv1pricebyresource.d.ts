import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudChannelV1Price } from "./googlecloudchannelv1price";
import { GoogleCloudChannelV1PricePhase } from "./googlecloudchannelv1pricephase";
export declare enum GoogleCloudChannelV1PriceByResourceResourceTypeEnum {
    ResourceTypeUnspecified = "RESOURCE_TYPE_UNSPECIFIED",
    Seat = "SEAT",
    Mau = "MAU",
    Gb = "GB",
    LicensedUser = "LICENSED_USER",
    Minutes = "MINUTES",
    IaasUsage = "IAAS_USAGE",
    Subscription = "SUBSCRIPTION"
}
/**
 * Represents price by resource type.
**/
export declare class GoogleCloudChannelV1PriceByResource extends SpeakeasyBase {
    price?: GoogleCloudChannelV1Price;
    pricePhases?: GoogleCloudChannelV1PricePhase[];
    resourceType?: GoogleCloudChannelV1PriceByResourceResourceTypeEnum;
}
