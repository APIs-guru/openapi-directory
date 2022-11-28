import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetProductsSearchJsonFieldsEnum {
    Sku = "sku",
    Barcode = "barcode",
    Brand = "brand",
    Name = "name",
    Description = "description",
    Variants = "variants",
    OptionName = "option_name",
    CustomFields = "custom_fields",
    CustomFieldsSelects = "custom_fields_selects"
}
export declare class GetProductsSearchJsonQueryParams extends SpeakeasyBase {
    authtoken: string;
    fields?: GetProductsSearchJsonFieldsEnum;
    locale?: string;
    login: string;
    query: string;
}
export declare class GetProductsSearchJsonRequest extends SpeakeasyBase {
    queryParams: GetProductsSearchJsonQueryParams;
}
export declare class GetProductsSearchJsonResponse extends SpeakeasyBase {
    contentType: string;
    notFound?: any;
    products?: shared.Product[];
    statusCode: number;
}
