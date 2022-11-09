import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Weight } from "./weight";

export enum ShippingShippingPricingModelEnum {
    Free = "FREE"
,    Standard = "STANDARD"
}


export class Shipping extends SpeakeasyBase {
  @Metadata({ data: "json, name=shippingPricingModel" })
  shippingPricingModel?: ShippingShippingPricingModelEnum;

  @Metadata({ data: "json, name=weight" })
  weight?: Weight;

  @Metadata({ data: "json, name=weightInGrams" })
  weightInGrams?: number;
}
