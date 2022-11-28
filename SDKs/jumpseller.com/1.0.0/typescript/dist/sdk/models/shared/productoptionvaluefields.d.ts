import { SpeakeasyBase } from "../../../internal/utils";
import { ProductOption } from "./productoption";
import { Variant } from "./variant";
export declare class ProductOptionValueFields extends SpeakeasyBase {
    id?: number;
    name?: string;
    position?: number;
    productOption?: ProductOption;
    variants?: Variant[];
}
