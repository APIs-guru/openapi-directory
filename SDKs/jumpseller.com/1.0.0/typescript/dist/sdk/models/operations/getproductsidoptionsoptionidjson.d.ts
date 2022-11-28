import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetProductsIdOptionsOptionIdJsonPathParams extends SpeakeasyBase {
    id: number;
    optionId: number;
}
export declare class GetProductsIdOptionsOptionIdJsonQueryParams extends SpeakeasyBase {
    authtoken: string;
    login: string;
}
export declare class GetProductsIdOptionsOptionIdJsonRequest extends SpeakeasyBase {
    pathParams: GetProductsIdOptionsOptionIdJsonPathParams;
    queryParams: GetProductsIdOptionsOptionIdJsonQueryParams;
}
export declare class GetProductsIdOptionsOptionIdJsonResponse extends SpeakeasyBase {
    contentType: string;
    notFound?: any;
    productOption?: shared.ProductOption;
    statusCode: number;
}
