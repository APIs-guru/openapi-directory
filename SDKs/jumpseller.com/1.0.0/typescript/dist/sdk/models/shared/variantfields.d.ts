import { SpeakeasyBase } from "../../../internal/utils";
import { ImageFields } from "./imagefields";
import { ProductOptionVariantEdit } from "./productoptionvariantedit";
export declare class VariantFields extends SpeakeasyBase {
    id?: number;
    image?: ImageFields;
    options?: ProductOptionVariantEdit[];
    price?: number;
    sku?: string;
    stock?: number;
    stockUnlimited?: boolean;
}
