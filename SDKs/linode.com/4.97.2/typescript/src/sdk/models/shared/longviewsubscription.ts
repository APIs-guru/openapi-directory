import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum LongviewSubscriptionIdEnum {
    Longview3 = "longview-3"
,    Longview10 = "longview-10"
,    Longview40 = "longview-40"
,    Longview100 = "longview-100"
}


// LongviewSubscriptionPrice
/** 
 * Pricing information about this Subscription tier.
 * 
**/
export class LongviewSubscriptionPrice extends SpeakeasyBase {
  @Metadata({ data: "json, name=hourly" })
  hourly?: number;

  @Metadata({ data: "json, name=monthly" })
  monthly?: number;
}


// LongviewSubscription
/** 
 * A Longview Subscription represents a tier of Longview service you can subscribe to.
 * 
**/
export class LongviewSubscription extends SpeakeasyBase {
  @Metadata({ data: "json, name=clients_included" })
  clientsIncluded?: number;

  @Metadata({ data: "json, name=id" })
  id?: LongviewSubscriptionIdEnum;

  @Metadata({ data: "json, name=label" })
  label?: string;

  @Metadata({ data: "json, name=price" })
  price?: LongviewSubscriptionPrice;
}
