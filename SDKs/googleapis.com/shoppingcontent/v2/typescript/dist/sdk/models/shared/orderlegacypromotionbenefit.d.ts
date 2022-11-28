import { SpeakeasyBase } from "../../../internal/utils";
import { Price } from "./price";
export declare class OrderLegacyPromotionBenefit extends SpeakeasyBase {
    discount?: Price;
    offerIds?: string[];
    subType?: string;
    taxImpact?: Price;
    type?: string;
}
