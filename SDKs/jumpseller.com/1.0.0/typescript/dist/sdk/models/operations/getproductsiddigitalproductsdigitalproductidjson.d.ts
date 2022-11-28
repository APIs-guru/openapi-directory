import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetProductsIdDigitalProductsDigitalProductIdJsonPathParams extends SpeakeasyBase {
    digitalProductId: number;
    id: number;
}
export declare class GetProductsIdDigitalProductsDigitalProductIdJsonQueryParams extends SpeakeasyBase {
    authtoken: string;
    login: string;
}
export declare class GetProductsIdDigitalProductsDigitalProductIdJsonRequest extends SpeakeasyBase {
    pathParams: GetProductsIdDigitalProductsDigitalProductIdJsonPathParams;
    queryParams: GetProductsIdDigitalProductsDigitalProductIdJsonQueryParams;
}
export declare class GetProductsIdDigitalProductsDigitalProductIdJsonResponse extends SpeakeasyBase {
    contentType: string;
    digitalProduct?: shared.DigitalProduct;
    notFound?: any;
    statusCode: number;
}
