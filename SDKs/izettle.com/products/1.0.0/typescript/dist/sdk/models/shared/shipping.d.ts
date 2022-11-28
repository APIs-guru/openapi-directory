import { SpeakeasyBase } from "../../../internal/utils";
import { Weight } from "./weight";
export declare enum ShippingShippingPricingModelEnum {
    Free = "FREE",
    Standard = "STANDARD"
}
export declare class Shipping extends SpeakeasyBase {
    shippingPricingModel?: ShippingShippingPricingModelEnum;
    weight?: Weight;
    weightInGrams?: number;
}
