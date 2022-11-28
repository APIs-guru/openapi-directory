import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetProductsIdDigitalProductsJsonPathParams extends SpeakeasyBase {
    id: number;
}
export declare class GetProductsIdDigitalProductsJsonQueryParams extends SpeakeasyBase {
    authtoken: string;
    login: string;
}
export declare class GetProductsIdDigitalProductsJsonRequest extends SpeakeasyBase {
    pathParams: GetProductsIdDigitalProductsJsonPathParams;
    queryParams: GetProductsIdDigitalProductsJsonQueryParams;
}
export declare class GetProductsIdDigitalProductsJsonResponse extends SpeakeasyBase {
    contentType: string;
    digitalProducts?: shared.DigitalProduct[];
    notFound?: any;
    statusCode: number;
}
