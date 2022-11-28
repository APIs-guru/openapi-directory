import { SpeakeasyBase } from "../../../internal/utils";
import { ProductOptionVariantEdit } from "./productoptionvariantedit";
export declare class VariantEditFields extends SpeakeasyBase {
    imageId?: number;
    options?: ProductOptionVariantEdit[];
    price?: number;
    sku?: string;
    stock?: number;
    stockUnlimited?: boolean;
}
