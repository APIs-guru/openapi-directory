import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Weight } from "./weight";


export enum ShippingShippingPricingModelEnum {
    Free = "FREE",
    Standard = "STANDARD"
}


export class Shipping extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=shippingPricingModel" })
  shippingPricingModel?: ShippingShippingPricingModelEnum;

  @SpeakeasyMetadata({ data: "json, name=weight" })
  weight?: Weight;

  @SpeakeasyMetadata({ data: "json, name=weightInGrams" })
  weightInGrams?: number;
}
