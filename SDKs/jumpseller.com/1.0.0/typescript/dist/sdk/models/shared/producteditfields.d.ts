import { SpeakeasyBase } from "../../../internal/utils";
import { CategoryFields } from "./categoryfields";
export declare enum ProductEditFieldsPackageFormatEnum {
    Box = "box",
    Cylinder = "cylinder"
}
export declare enum ProductEditFieldsStatusEnum {
    Available = "available",
    NotAvailable = "not-available",
    Disabled = "disabled"
}
export declare class ProductEditFields extends SpeakeasyBase {
    barcode?: string;
    categories?: CategoryFields[];
    description?: string;
    diameter?: number;
    featured?: boolean;
    googleProductCategory?: string;
    height?: number;
    length?: number;
    metaDescription?: string;
    name: string;
    packageFormat?: ProductEditFieldsPackageFormatEnum;
    pageTitle?: string;
    permalink?: string;
    price: number;
    shippingRequired?: boolean;
    sku?: string;
    status?: ProductEditFieldsStatusEnum;
    stock?: number;
    stockUnlimited?: boolean;
    weight?: number;
    width?: number;
}
