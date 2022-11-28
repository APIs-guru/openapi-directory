import { SpeakeasyBase } from "../../../internal/utils";
import { OrderLineItemProductFee } from "./orderlineitemproductfee";
import { Price } from "./price";
import { OrderLineItemProductVariantAttribute } from "./orderlineitemproductvariantattribute";
export declare class OrderLineItemProduct extends SpeakeasyBase {
    brand?: string;
    condition?: string;
    contentLanguage?: string;
    fees?: OrderLineItemProductFee[];
    gtin?: string;
    id?: string;
    imageLink?: string;
    itemGroupId?: string;
    mpn?: string;
    offerId?: string;
    price?: Price;
    shownImage?: string;
    targetCountry?: string;
    title?: string;
    variantAttributes?: OrderLineItemProductVariantAttribute[];
}
