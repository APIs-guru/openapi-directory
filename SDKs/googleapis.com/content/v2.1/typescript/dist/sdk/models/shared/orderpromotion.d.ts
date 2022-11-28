import { SpeakeasyBase } from "../../../internal/utils";
import { OrderPromotionItem } from "./orderpromotionitem";
import { Price } from "./price";
export declare class OrderPromotion extends SpeakeasyBase {
    applicableItems?: OrderPromotionItem[];
    appliedItems?: OrderPromotionItem[];
    endTime?: string;
    funder?: string;
    merchantPromotionId?: string;
    priceValue?: Price;
    shortTitle?: string;
    startTime?: string;
    subtype?: string;
    taxValue?: Price;
    title?: string;
    type?: string;
}
