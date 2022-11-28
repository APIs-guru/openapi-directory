import { SpeakeasyBase } from "../../../internal/utils";
import { CategoryFields } from "./categoryfields";
import { ImageFields } from "./imagefields";
import { VariantFields } from "./variantfields";
export declare enum ProductFieldsPackageFormatEnum {
    Box = "box",
    Cylinder = "cylinder"
}
export declare enum ProductFieldsStatusEnum {
    Available = "available",
    NotAvailable = "not-available",
    Disabled = "disabled"
}
export declare class ProductFields extends SpeakeasyBase {
    barcode?: string;
    categories?: CategoryFields[];
    createdAt?: string;
    description?: string;
    diameter?: number;
    discount?: number;
    featured?: boolean;
    googleProductCategory?: string;
    height?: number;
    id?: number;
    images?: ImageFields[];
    length?: number;
    name?: string;
    packageFormat?: ProductFieldsPackageFormatEnum;
    permalink?: string;
    price?: number;
    sku?: string;
    status?: ProductFieldsStatusEnum;
    stock?: number;
    stockUnlimited?: boolean;
    variants?: VariantFields[];
    weight?: number;
    width?: number;
}
