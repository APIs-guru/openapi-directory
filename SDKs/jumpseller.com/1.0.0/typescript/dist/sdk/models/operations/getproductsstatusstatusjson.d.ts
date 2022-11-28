import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetProductsStatusStatusJsonStatusEnum {
    Available = "available",
    NotAvailable = "not-available",
    Disabled = "disabled"
}
export declare class GetProductsStatusStatusJsonPathParams extends SpeakeasyBase {
    status: GetProductsStatusStatusJsonStatusEnum;
}
export declare class GetProductsStatusStatusJsonQueryParams extends SpeakeasyBase {
    authtoken: string;
    locale?: string;
    login: string;
}
export declare class GetProductsStatusStatusJsonRequest extends SpeakeasyBase {
    pathParams: GetProductsStatusStatusJsonPathParams;
    queryParams: GetProductsStatusStatusJsonQueryParams;
}
export declare class GetProductsStatusStatusJsonResponse extends SpeakeasyBase {
    contentType: string;
    products?: shared.Product[];
    statusCode: number;
    statusInvalid?: any;
}
