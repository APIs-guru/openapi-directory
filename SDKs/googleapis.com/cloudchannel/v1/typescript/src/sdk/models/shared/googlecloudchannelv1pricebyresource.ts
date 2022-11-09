import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudChannelV1Price } from "./googlecloudchannelv1price";
import { GoogleCloudChannelV1PricePhase } from "./googlecloudchannelv1pricephase";

export enum GoogleCloudChannelV1PriceByResourceResourceTypeEnum {
    ResourceTypeUnspecified = "RESOURCE_TYPE_UNSPECIFIED"
,    Seat = "SEAT"
,    Mau = "MAU"
,    Gb = "GB"
,    LicensedUser = "LICENSED_USER"
,    Minutes = "MINUTES"
,    IaasUsage = "IAAS_USAGE"
,    Subscription = "SUBSCRIPTION"
}


// GoogleCloudChannelV1PriceByResource
/** 
 * Represents price by resource type.
**/
export class GoogleCloudChannelV1PriceByResource extends SpeakeasyBase {
  @Metadata({ data: "json, name=price" })
  price?: GoogleCloudChannelV1Price;

  @Metadata({ data: "json, name=pricePhases", elemType: shared.GoogleCloudChannelV1PricePhase })
  pricePhases?: GoogleCloudChannelV1PricePhase[];

  @Metadata({ data: "json, name=resourceType" })
  resourceType?: GoogleCloudChannelV1PriceByResourceResourceTypeEnum;
}
