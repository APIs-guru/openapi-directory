import { SpeakeasyBase } from "../../../internal/utils";
import { OrderLegacyPromotionBenefit } from "./orderlegacypromotionbenefit";
export declare class OrderLegacyPromotion extends SpeakeasyBase {
    benefits?: OrderLegacyPromotionBenefit[];
    effectiveDates?: string;
    genericRedemptionCode?: string;
    id?: string;
    longTitle?: string;
    productApplicability?: string;
    redemptionChannel?: string;
}
