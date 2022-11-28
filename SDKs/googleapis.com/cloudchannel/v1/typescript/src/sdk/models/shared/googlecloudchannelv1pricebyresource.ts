import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudChannelV1Price } from "./googlecloudchannelv1price";
import { GoogleCloudChannelV1PricePhase } from "./googlecloudchannelv1pricephase";


export enum GoogleCloudChannelV1PriceByResourceResourceTypeEnum {
    ResourceTypeUnspecified = "RESOURCE_TYPE_UNSPECIFIED",
    Seat = "SEAT",
    Mau = "MAU",
    Gb = "GB",
    LicensedUser = "LICENSED_USER",
    Minutes = "MINUTES",
    IaasUsage = "IAAS_USAGE",
    Subscription = "SUBSCRIPTION"
}


// GoogleCloudChannelV1PriceByResource
/** 
 * Represents price by resource type.
**/
export class GoogleCloudChannelV1PriceByResource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=price" })
  price?: GoogleCloudChannelV1Price;

  @SpeakeasyMetadata({ data: "json, name=pricePhases", elemType: GoogleCloudChannelV1PricePhase })
  pricePhases?: GoogleCloudChannelV1PricePhase[];

  @SpeakeasyMetadata({ data: "json, name=resourceType" })
  resourceType?: GoogleCloudChannelV1PriceByResourceResourceTypeEnum;
}
